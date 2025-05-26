# Get Stuff Done AI

[![codecov](https://codecov.io/gh/culstrup/get-stuff-done-ai/graph/badge.svg?token=YOUR_TOKEN)](https://codecov.io/gh/culstrup/get-stuff-done-ai)

**URL**: https://gsdat.work

## Project Overview

This is the codebase for Get Stuff Done AI, a consulting business focused on AI implementation expertise.

## Technologies

- Vite + React + TypeScript
- Tailwind CSS with shadcn/ui components
- SEO optimization with metadata
- React Router for routing
- Netlify for CI/CD and hosting

## Development Setup

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Testing

This project uses Playwright for end-to-end testing:

```bash
# Install Playwright browsers
npx playwright install

# Run all tests
npm test

# Run tests with UI
npm run test:ui

# Run tests in headed browsers
npm run test:headed

# Run only SEO tests
npm run test:seo
```

## CI Pipeline

Tests are automatically run on:
- Pull requests to the main branch
- Push to the main branch

The GitHub Actions workflow checks:
- Linting with ESLint
- End-to-end tests with Playwright
- Test reports are uploaded as artifacts

## Deploy

This project is automatically deployed to Netlify:
- Production: Merging to `main` triggers a production deploy
- Preview: Pull requests generate preview deployments

## SEO Optimization

To ensure proper indexing by search engines:

1. **Regenerate Sitemap**: Run `npm run generate:sitemap` to update the sitemap with all blog posts
2. **Fix SEO Issues**: Run `npm run fix:seo` to regenerate sitemap and rebuild the site
3. **Domain Consistency**: All URLs use `gsdat.work` domain (not `getstuffdone.ai`)
4. **URL Format**: Blog posts use format `/blog/post-YYYY-MM-DD-POSTID`
5. **Check Indexing Status**: Monitor Google Search Console for "Crawled - not indexed" issues

Important: The sitemap is automatically generated during build, but you can manually update it with `npm run generate:seo`.
