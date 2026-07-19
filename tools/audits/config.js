const baseUrl = (process.env.AUDIT_BASE_URL ?? 'http://localhost:4321').replace(/\/$/, '')

export const testUrls = [
	`${baseUrl}/`,

	`${baseUrl}/about/`,

	`${baseUrl}/blog/`,
	`${baseUrl}/blog/outgrowing-tailwind/`,
	`${baseUrl}/blog/minimal-css-approach-to-content-containers/`,
	`${baseUrl}/blog/de-escalating-styles-with-css-cascade-layers/`,
	`${baseUrl}/blog/hi-there/`,

	`${baseUrl}/dnd/`,
	`${baseUrl}/dnd/tion/`,
]

export const lighthouseSettings = {
	maxWaitForFcp: 15000,
	maxWaitForLoad: 30000,
	disableFullPageScreenshot: true,
}

// All audits grouped by category
export const auditsByCategory = {
	performance: [
		'first-contentful-paint',
		'largest-contentful-paint',
		'total-blocking-time',
		'cumulative-layout-shift',
		'speed-index',
		'viewport-insight',
	],
	accessibility: [
		'aria-allowed-attr',
		'aria-conditional-attr',
		'aria-hidden-body',
		'aria-prohibited-attr',
		'aria-valid-attr-value',
		'aria-valid-attr',
		'color-contrast',
		'document-title',
		'heading-order',
		'html-has-lang',
		'html-lang-valid',
		'link-in-text-block',
		'link-name',
		'meta-viewport',
		'target-size',
	],
	bestPractice: [
		'is-on-https',
		'geolocation-on-start',
		'notification-on-start',
		'paste-preventing-inputs',
		'image-aspect-ratio',
		'image-size-responsive',
		'doctype',
		'charset',
		'baseline',
		'deprecations',
		'third-party-cookies',
		'errors-in-console',
		'inspector-issues',
	],
	seo: [
		'is-crawlable',
		'document-title',
		'meta-description',
		'http-status-code',
		'link-text',
		'crawlable-anchors',
		'hreflang',
		'canonical',
	],
}
