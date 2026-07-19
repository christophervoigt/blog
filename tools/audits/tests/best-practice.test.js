import { describe, it, beforeAll } from 'vitest'
import { testUrls, auditsByCategory } from '../config.js'
import { loadReportData } from '../utils/report-loader.js'
import { checkAuditResult } from '../utils/audit-checker.js'

describe.each(testUrls)('Best practice checks for %s', (url) => {
	let audits

	beforeAll(async () => {
		const lhr = await loadReportData(url)
		audits = lhr.audits
	})

	// Generate tests for each best practice audit
	auditsByCategory['bestPractice'].forEach((auditName) => {
		it(`"${auditName}"`, async (ctx) => {
			checkAuditResult(audits[auditName], ctx, auditName)
		})
	})
})
