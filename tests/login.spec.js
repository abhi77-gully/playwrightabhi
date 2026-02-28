            const { test, expect } = require('@playwright/test');
 
            test('Contact form submission', async ({ page }) => {
                await page.goto('http://127.0.0.1:5500/html/contact.html');
                await page.fill('#name', 'John');
                await page.fill('#email', 'john@example.com');
                await page.click('text=Submit');
                await expect(page.locator('#result')).toHaveText('Submitted');
            });
