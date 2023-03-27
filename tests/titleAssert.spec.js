const { test, expect } = require('@playwright/test');

//test to verify title of facebook page

test('Vetify title of facebook', async ({ page }) => {
    await page.goto("https://facebook.com");

    await expect(page).toHaveTitle("Facebook - log in or sign up")

});  