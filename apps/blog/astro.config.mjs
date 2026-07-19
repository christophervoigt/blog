import { defineConfig } from 'astro/config'
import sitemap from '@astrojs/sitemap'

import shikiConfig from './shiki.config.mjs'

// https://astro.build/config
export default defineConfig({
	site: 'https://christophervoigt.dev/',
	integrations: [
		sitemap({
			// exclude posts from sitemap that are on draft ... this is such a bullshit filter
			filter: (page, bla) =>
				page !== 'https://christophervoigt.dev/blog/containers/' &&
				page !== 'https://christophervoigt.dev/blog/rediscovering-stylelint/' &&
				page !== 'https://christophervoigt.dev/blog/styleguide/',
		}),
	],
	markdown: {
		shikiConfig,
	},
	build: {
		inlineStylesheets: 'always',
	},
	devToolbar: {
		enabled: false,
	},
})
