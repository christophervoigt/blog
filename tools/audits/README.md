# Lighthouse Testing with Vitest

This project performs automated Lighthouse testing for websites using Vitest as the test runner.

## Features

- Performance audits (Core Web Vitals)
- Accessibility testing
- Best practices validation
- SEO checks
- Automated report generation

## Setup

1. Install dependencies:

   ```bash
   npm ci --workspace @christophervoigt/blog-audits --include-workspace-root=false
   ```

2. Generate Lighthouse reports:

   ```bash
   npm run generate-reports --workspace @christophervoigt/blog-audits
   ```

3. Run tests:

   ```bash
   npm test --workspace @christophervoigt/blog-audits
   ```

4. Or run both steps together:

   ```bash
   npm run test:full --workspace @christophervoigt/blog-audits
   ```

5. Run tests in watch mode:
   ```bash
   npm run test:watch --workspace @christophervoigt/blog-audits
   ```

## How It Works

1. **Report Generation**: `npm run generate-reports` runs Lighthouse once per URL and generates comprehensive JSON reports
2. **Fast Testing**: Test files read from pre-generated reports instead of running Lighthouse again
3. **Single Source**: One comprehensive report per URL contains all audit data
4. **Efficient**: Much faster test execution since no browser automation is needed during testing
5. **Smart Skipping**: Tests automatically skip when audits are not applicable to the page
6. **Shared Logic**: All audit categories use consistent validation logic from a shared utility

## Available Scripts

- `npm run generate-reports` - Generate fresh Lighthouse reports for all URLs
- `npm test` - Run all tests against existing reports
- `npm run test:full` - Generate reports and run tests in sequence
- `npm run test:watch` - Run tests in watch mode (reports must exist first)

## Configuration

- **Test URLs**: Configure URLs and thresholds in `config.js`
- **Base URL**: Set `AUDIT_BASE_URL`; it defaults to `http://localhost:4321`
- **Lighthouse settings**: Modify common settings in `config.js`
- **Vitest config**: Adjust test runner settings in `vitest.config.js`

## Test Files

- `tests/performance.test.js` - Core Web Vitals and performance metrics (uses threshold-based scoring)
- `tests/accessibility.test.js` - WCAG and accessibility audits (uses shared audit checker)
- `tests/best-practice.test.js` - Security and best practice checks (uses shared audit checker)
- `tests/seo.test.js` - SEO and meta tag validation (uses shared audit checker)

## Adding URLs

To test additional URLs, simply add them to the `testUrls` array in `config.js`:

```javascript
export const testUrls = [
	{
		url: 'https://www.example.com/',
		performanceThreshold: 0.7,
	},
	{
		url: 'https://www.example.com/about',
		performanceThreshold: 0.8,
	},
]
```

## Reports

Test results are automatically saved as JSON files in the `reports/` directory.

## Test Structure

- `config.js` - Central configuration for URLs and Lighthouse settings
- `scripts/generate-reports.js` - Script to generate Lighthouse reports
- `utils/report-loader.js` - Helper functions to load report data
- `utils/audit-checker.js` - Shared audit validation logic with skip handling
- `tests/` - Individual test files that read from generated reports

## Audit Testing

All audit tests use a shared validation function that:

- **Skips tests** when audits are not applicable to the page (e.g., `link-in-text-block` on pages without links)
- **Validates scores** by checking that audit scores equal 1 (perfect score)
- **Handles edge cases** by checking `details.items` when scores are not perfect
- **Provides consistent behavior** across all test categories

This approach ensures reliable testing while properly handling audits that may not apply to certain pages.
