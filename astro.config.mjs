import { defineConfig } from 'astro/config'
import sitemap from '@astrojs/sitemap'

import shikiConfig from './shiki.config.mjs'

// https://astro.build/config
export default defineConfig({
	site: 'https://christophervoigt.dev/',
	integrations: [sitemap()],
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
