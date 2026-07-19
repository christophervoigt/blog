# christophervoigt.dev

[![Webmentions](https://github.com/christophervoigt/blog/actions/workflows/webmentions.yml/badge.svg)](https://github.com/christophervoigt/blog/actions/workflows/webmentions.yml)
[![Lighthouse](https://github.com/christophervoigt/blog/actions/workflows/audits.yml/badge.svg)](https://github.com/christophervoigt/blog/actions/workflows/audits.yml)

The repository contains the Astro blog and its Lighthouse audit tooling as separate npm workspaces.

```bash
npm run dev --workspace @christophervoigt/blog
npm run build --workspace @christophervoigt/blog
npm run test:full --workspace @christophervoigt/blog-audits
```
