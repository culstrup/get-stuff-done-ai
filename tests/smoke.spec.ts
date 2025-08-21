import { test, expect } from '@playwright/test';

// These tests run against production to ensure basic functionality works
// They are tagged with @smoke and run via: npm run test:production

test.describe('Production Smoke Tests @smoke', () => {
  test('homepage loads successfully', async ({ page }) => {
    const response = await page.goto('/', { 
      waitUntil: 'domcontentloaded',
      timeout: process.env.CI ? 60000 : 30000 
    });
    expect(response?.status()).toBeLessThan(400);
    
    // Check critical elements exist
    await expect(page).toHaveTitle(/GSD at Work/);
    await expect(page.locator('h1')).toBeVisible();
  });

  test('navigation is accessible', async ({ page, isMobile }) => {
    await page.goto('/', { 
      waitUntil: 'domcontentloaded',
      timeout: process.env.CI ? 60000 : 30000 
    });
    
    if (isMobile) {
      // Mobile navigation should show mobile nav button
      const mobileNavButton = page.locator('button[data-testid="mobile-nav-button"]');
      await expect(mobileNavButton).toBeVisible();
    } else {
      // Desktop navigation should be visible on desktop
      const desktopNav = page.locator('nav').first();
      await expect(desktopNav).toBeVisible();
    }
  });

  test('critical pages are accessible', async ({ page }) => {
    const criticalPages = [
      '/',
      '/ai-action-workshop',
      '/ai-tooling-report',
      '/blog',
      '/cases'
    ];
    
    for (const path of criticalPages) {
      const response = await page.goto(path, { 
        waitUntil: 'domcontentloaded',
        timeout: process.env.CI ? 60000 : 30000 
      });
      expect(response?.status()).toBeLessThan(400);
    }
  });

  test('contact methods work', async ({ page }) => {
    await page.goto('/', { 
      waitUntil: 'domcontentloaded',
      timeout: process.env.CI ? 60000 : 30000 
    });
    
    // Wait for page to load completely with CI-specific timeout
    await page.waitForLoadState('domcontentloaded');
    
    // Phone links have been removed from main navigation
    // Only keeping phone CTAs on confirmation pages
    
    // Check calendly button exists (may need scrolling)
    const bookButton = page.getByText('Book a Strategy Call').first();
    await expect(bookButton).toBeVisible({ timeout: process.env.CI ? 20000 : 10000 });
  });
});