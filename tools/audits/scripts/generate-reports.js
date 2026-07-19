#!/usr/bin/env node

import { promises as fs } from 'fs'
import puppeteer from 'puppeteer'
import lighthouse from 'lighthouse'
import { testUrls, lighthouseSettings, auditsByCategory } from '../config.js'

async function generateReports() {
	console.log('🚀 Starting Lighthouse report generation...')

	const browser = await puppeteer.launch({
		headless: true,
		args: ['--no-sandbox', '--disable-setuid-sandbox'],
	})

	try {
		for (const url of testUrls) {
			console.log(`Generating report for: ${url}`)

			const page = await browser.newPage()
			await page.goto(url)

			const lighthouseOptions = {
				extends: 'lighthouse:default',
				settings: {
					...lighthouseSettings,
					onlyAudits: Object.values(auditsByCategory).flat(),
				},
			}

			const { lhr } = await lighthouse(url, undefined, lighthouseOptions, page)

			const fileName = `lighthouse-report-for-${url.replace(/\W+/g, '-').replace(/-$/, '')}.json`
			const filePath = new URL(`../reports/${fileName}`, import.meta.url)

			await fs.writeFile(filePath, Buffer.from(JSON.stringify(lhr, null, 2)))

			await page.close()
		}
	} finally {
		await browser.close()
	}

	console.log('🎉 All reports generated successfully!')
}

generateReports().catch((error) => {
	console.error(error)
	process.exitCode = 1
})
