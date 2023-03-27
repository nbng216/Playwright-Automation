const { test, expect } = require('@playwright/test');

test('Browser context playwright', async ({ browser }) => {

    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto('https://rahulshettyacademy.com/client/');
    await page.locator('input#userEmail').type("nabingaihre216@gmail.com");
    await page.locator('#userPassword').type("password124");
    await page.locator('#login').click();
    //console.log(await page.locator('#toast-container').textContent());
    await expect(page.locator('#toast-container')).toContainText("Incorrect");


})




