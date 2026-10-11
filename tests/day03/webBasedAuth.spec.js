 import { expect, test } from '@playwright/test';

test('WebBased Authentication - embedded within url', {tag: "@smoke"}, async ({ page }) => {
    // https://the-internet.herokuapp.com/basic_auth
    await page.goto("https://admin:admin@the-internet.herokuapp.com/basic_auth");
    await page.waitForTimeout(1000);

    const successLoginMessage = page.getByText('Congratulations! You must have the proper credentials.', { exact: true });
    await expect(successLoginMessage).toBeVisible;

});

test('WebBased Authentication - encoded', {tag: "@smoke"}, async ({ page }) => {

    // 1 - encode the credentials
    const encodedCreds = Buffer.from("admin:admin").toString("base64");
    await page.setExtraHTTPHeaders({Authorization: `Basic ${encodedCreds }`});
    console.log(encodedCreds);

    // https://the-internet.herokuapp.com/basic_auth
    await page.goto("https://the-internet.herokuapp.com/basic_auth");
    // await page.waitForTimeout(5000);

    const successLoginMessage = page.getByText('Congratulations! You must have the proper credentials.', { exact: true });
    await expect(successLoginMessage).toBeVisible;

});
