import { describe, it, beforeAll } from 'vitest'
import { testUrls, auditsByCategory } from '../config.js'
import { loadReportData } from '../utils/report-loader.js'
import { checkAuditResult } from '../utils/audit-checker.js'

describe.each(testUrls)('SEO checks for %s', (url) => {
	let audits

	beforeAll(async () => {
		const lhr = await loadReportData(url)
		audits = lhr.audits
	})

	// Generate tests for each SEO audit
	auditsByCategory['seo'].forEach((auditName) => {
		it(`"${auditName}"`, async (ctx) => {
			checkAuditResult(audits[auditName], ctx, auditName)
		})
	})
})
