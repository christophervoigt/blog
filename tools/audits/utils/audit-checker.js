import { expect } from 'vitest'

const ALLOW_NOT_APPLICABLE_AUDITS = new Set(['link-in-text-block'])

// Helper function to check audit results
export function checkAuditResult(audit, ctx, auditName) {
	if (!audit) {
		throw new Error(
			`Missing Lighthouse audit result for "${auditName}". This usually means the audit ID changed or was removed in a Lighthouse upgrade.`
		)
	}

	if (audit.scoreDisplayMode === 'notApplicable') {
		expect(ALLOW_NOT_APPLICABLE_AUDITS.has(auditName)).toBe(true)
		expect(audit.score).toBeNull()
		return
	}

	expect(audit.score).toBeGreaterThanOrEqual(0.99) // Ensure score is at least 99%
}
