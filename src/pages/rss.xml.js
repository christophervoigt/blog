import rss from '@astrojs/rss'
import { getCollection } from 'astro:content'

import { SITE_TITLE, SITE_DESCRIPTION } from '../consts'

export async function GET(context) {
	const posts = (await getCollection('blog'))
		.sort((a, b) => {
			const aDate = new Date(a.data.pubDate)
			const bDate = new Date(b.data.pubDate)

			if (aDate > bDate) {
				return 1
			} else if (aDate < bDate) {
				return -1
			} else {
				return 0
			}
		})
		.filter((post) => post.data.status !== 'draft')

	return rss({
		title: SITE_TITLE,
		description: SITE_DESCRIPTION,
		site: context.site,
		items: posts.map((post) => ({
			...post.data,
			link: `/blog/${post.slug}/`,
		})),
	})
}
