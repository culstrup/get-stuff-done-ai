# Get Stuff Done AI

[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)
[![GitHub Actions](https://github.com/culstrup/get-stuff-done-ai/workflows/CI/badge.svg)](https://github.com/culstrup/get-stuff-done-ai/actions)
[![codecov](https://codecov.io/gh/culstrup/get-stuff-done-ai/graph/badge.svg)](https://codecov.io/gh/culstrup/get-stuff-done-ai)
[![Netlify Status](https://api.netlify.com/api/v1/badges/49513722-08c3-4e06-8f9d-f6f3732a3b15/deploy-status)](https://app.netlify.com/sites/deft-florentine-69dcb4/deploys)
[![Boss Bounty Badge](https://img.shields.io/endpoint.svg?url=https://api.boss.dev/badge/enabled/culstrup/get-stuff-done-ai)](https://www.boss.dev/issues/repo/culstrup/get-stuff-done-ai)

**Live Site**: https://gsdat.work

## 🚀 About GSD at Work LLC

This is the website for **GSD at Work LLC**, a boutique consultancy that helps visionary leaders set bold goals and achieve them 10x faster with AI. 

### Our Philosophy

- **Results, Not Slides**: We're action-oriented, focusing on tangible outcomes rather than endless presentations
- **Maximizing Degrees of Freedom**: We believe in flexible, adaptive approaches that preserve optionality
- **AI-Powered Transformation**: We leverage cutting-edge AI tools to accelerate growth and innovation

### Why Open Source?

While we have a formal associates program, this repository is open source to:
- Enable rapid, permissionless contributions from talented developers
- Allow quick responses to bounties and feature requests
- Build in public and demonstrate our commitment to transparency
- Share our approach to building AI-focused business solutions

## 🤝 Contributing

We actively encourage contributions! Whether you're responding to a bounty, fixing a bug, or proposing new features, we want to make it easy for you to contribute.

### Quick Start for Contributors

1. **Fork & Clone**
   ```bash
   git clone https://github.com/[your-username]/get-stuff-done-ai.git
   cd get-stuff-done-ai
   npm install
   ```

2. **Enable Git Hooks** (prevents accidental commits of sensitive data)
   ```bash
   git config core.hooksPath .githooks
   ```

3. **Create a Feature Branch**
   ```bash
   git checkout -b feature/your-awesome-feature
   ```

4. **Make Your Changes & Test**
   ```bash
   npm run dev     # Development server
   npm run build   # Ensure it builds
   npm run lint    # Check code style
   ```

5. **Submit a Pull Request**
   - Clear description of what you've done and why
   - Reference any related issues or bounties
   - Include screenshots for UI changes

### Bounties & Paid Contributions

We use [Boss.dev](https://www.boss.dev) for bounty management. Watch for issues labeled with 💰 `bounty` for paid contribution opportunities. We believe in compensating developers fairly for their work.

To claim a bounty:
1. Sign up at [boss.dev](https://www.boss.dev) and connect your bank account
2. Comment `/boss champion` on the issue you want to work on
3. Submit your PR - you'll be paid automatically when the issue is closed!

See [CONTRIBUTING.md](CONTRIBUTING.md) for detailed guidelines.

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
