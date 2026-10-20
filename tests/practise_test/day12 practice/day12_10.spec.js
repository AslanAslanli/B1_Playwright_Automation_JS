// Run the test and observe the Terminal.
// Questions:
// 1.  Which console message executes? -- after soft
// 2.  Which test continues after the failed assertion? -- test 2
// 3.  Do both tests ultimately fail? -- yes

import { test, expect } from "@playwright/test";

test.describe("Day 12 Task #10 - Hard vs Soft Assertions with Elements", () => {
  let sauceUsername;
  let saucePassword;
  let loginButton;

  test.beforeEach("Navigation to SauceDemo", async ({ page }) => {
    await page.goto(process.env.SAUCEDEMO_URL);
    //await page.waitForTimeout(5000);
    sauceUsername = page.locator("//input[@id='user-name']");
    saucePassword = page.locator("//input[@id='password']");
    loginButton = page.locator("#login-button");
  });

  test("Hard Element Assertion", async ({ page }) => {
    //await expect (sauceUsername).toBeHidden();
    console.log("Code after hard assertion");
  });

  test("Soft Element Assertion", async ({ page }) => {
    await expect.soft(sauceUsername).toBeHidden();
    console.log("Code after soft assertion");
    await expect(loginButton).toBeVisible();
  });
});
