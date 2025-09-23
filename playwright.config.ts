import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: 'html',
  // Global timeout configuration
  timeout: process.env.CI ? 90000 : 60000, // 90s for CI, 60s for local
  expect: {
    timeout: process.env.CI ? 15000 : 10000, // 15s for CI assertions
  },
  use: {
    // Use local dev server for development, allow override via BASE_URL
    baseURL: process.env.BASE_URL || 'http://localhost:8080',
    // Timeout configuration for CI vs local
    actionTimeout: process.env.CI ? 45000 : 30000, // 45s for CI actions
    navigationTimeout: process.env.CI ? 60000 : 30000, // 60s for CI navigation
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },
    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },
    {
      name: 'Mobile Chrome',
      use: { ...devices['Pixel 5'] },
    },
    {
      name: 'Mobile Safari',
      use: { ...devices['iPhone 12'] },
    },
  ],
  // Start dev server for local development (not in CI)
  webServer: process.env.CI ? undefined : {
    command: 'npm run dev',
    url: 'http://localhost:8080',
    reuseExistingServer: true,
    timeout: 120 * 1000,
  },
});