const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './tests',
  retries: 1,
  timeout: 30_000,
  workers: 3,
  reporter: 'html',   // 👈 ADD THIS

  use: {
    baseURL: 'http://127.0.0.1:5500',
    headless: true,
  },

  projects: [
    { name: 'Chromium', use: { browserName: 'chromium' } },
    { name: 'Firefox', use: { browserName: 'firefox' } },
    { name: 'WebKit', use: { browserName: 'webkit' } },
  ],
});

