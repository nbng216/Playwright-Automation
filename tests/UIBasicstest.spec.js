

const { test } = require('@playwright/test');

//with context
test('First Playwright test', async ({ browser }) => {
    //chrome
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://www.udemy.com/course/");

});
//without browser context
test('Page Playwright test', async ({ page }) => {

    await page.goto("https://www.udemy.com/course/");

});
