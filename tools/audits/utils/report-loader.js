import { promises as fs } from 'fs'

// Helper function to load report data
export async function loadReportData(url) {
	const fileName = `lighthouse-report-for-${url.replace(/\W+/g, '-').replace(/-$/, '')}.json`
	const filePath = new URL(`../reports/${fileName}`, import.meta.url)

	try {
		const data = await fs.readFile(filePath, 'utf8')
		return JSON.parse(data)
	} catch (error) {
		throw new Error(`Report not found for ${url}. Please run 'npm run generate-reports' first.`)
	}
}
