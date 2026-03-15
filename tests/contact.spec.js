const { test, expect } = require('@playwright/test');
const path = require('path');

test('custom login form - success scenario', async ({ page }) => {

  const filePath = path.resolve(__dirname, '../html/login.html');
  const fileUrl = 'file://' + filePath;

  await page.goto(fileUrl);

  await page.fill('#username', 'admin');
  await page.fill('#password', '1234');  // matches HTML
  await page.click('button');

  const message = page.locator('#message');

  await expect(message).toBeVisible();
  await expect(message).toHaveText('Login successful'); // matches HTML
});