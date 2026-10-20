// Test Case 01: - Locate the Username input. - Assert that it is visible.
// Test Case 02: - Locate the Password input. - Assert that it is visible.
// Test Case 03: - Locate the Login button. - Assert that it is visible. -
// Assert that it is enabled.

import {test, expect} from "@playwright/test";

test.describe("Hooks and Assertions Practice", () => {

  let sauceUsername;
  let saucePassword;
  let loginButton;

  test.beforeAll("Before All", () => {
    console.log("Before all function is executed");
  });

  test.beforeEach("Before Each", async ({page}) => {
    console.log("Before each function is executed ");

    await page.goto(process.env.SAUCEDEMO_URL);
    sauceUsername = page.locator("#user-name");
    saucePassword = page.locator("#password");
    loginButton = page.locator("#login-button");
  });

  test("Test Case 01", async({page}) => {
    await expect(sauceUsername).toBeVisible();
  });

  test("Test Case 02", async({page}) => {
    await expect(saucePassword).toBeVisible();
  });

  test("Test Case 03", async({page}) => {
    await expect(loginButton).toBeVisible();
    await expect(loginButton).toBeEnabled();
  });

  test.afterEach("After Each", () => {
    console.log("After each function is executed");
  });

  test.afterAll("After All", () => {
    console.log("After all function is executed");
  });


});