   const { test, expect } = require('@playwright/test');
const path = require('path');

test('Contact form submission', async ({ page }) => {

  const filePath = path.resolve(__dirname, '../html/contact.html');
  const fileUrl = 'file://' + filePath;

  await page.goto(fileUrl);

  await page.fill('#name', 'John');
  await page.fill('#email', 'john@example.com');
  await page.click('text=Submit');

  await expect(page.locator('#result')).toHaveText('Submitted');
});