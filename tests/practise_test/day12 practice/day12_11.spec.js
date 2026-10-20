// Run:

// 1.  All tests. -- npx playwright test day12_11
// 2.  Only @smoke tests. -- npx playwright test day12_11 --grep "@smoke" || npx playwright test day12_11 -g "@smoke"
// 3.  Only @regression tests. -- npx playwright test day12_11 --grep "@regression" || npx playwright test day12_11 -g "@smoke"

// Questions:

// 1.  How many tests execute when you run @smoke? -- 2
// 2.  How many tests execute when you run @regression? -- 2
// 3.  When running only @smoke, how many times does beforeEach execute? -- 2
// 4.  When running only @smoke, how many times does beforeAll execute? -- 1
// 5.  When running only @smoke, how many times does afterAll execute? -- 1

// Write your answers as comments.

import {test, expect} from "@playwright/test";

test.describe("Day 12 Task 11", () => {

  let sauceUsername;
  let saucePassword;
  let loginButton;

  let productsTitle;

  test.beforeAll("Before All", () => {
    console.log("Before all function is executed");
  });

  test.beforeEach("Before Each", async ({page}) => {
    console.log("Before each function is executed ");

    await page.goto(process.env.SAUCEDEMO_URL);
    sauceUsername = page.locator("#user-name");
    saucePassword = page.locator("#password");
    loginButton = page.locator("#login-button");

    productsTitle = page.getByText("Products");
  });

  test("Test 1: Name: Username Validation", {tag: "@smoke"}, async({page}) => {
    await expect(sauceUsername).toBeVisible();
    await expect(sauceUsername).toBeEnabled();
  });

  test("Test 2: Name: Password Validation", {tag: "@smoke"}, async({page}) => {
    await expect(saucePassword).toBeVisible();
    await expect(saucePassword).toBeEnabled();
  });

  test("Test 3: Name: Login Button Validation", {tag: "@regression"}, async({page}) => {
    await expect(loginButton).toBeVisible();
    await expect(loginButton).toBeEnabled();
  });

  test("Test 4: Name: Successful Login", {tag: "@regression"}, async({page}) => {
    await sauceUsername.fill(process.env.SAUCE_USERNAME);
    await saucePassword.fill(process.env.SAUCE_PASSWORD);
    await loginButton.click();

    await expect(productsTitle).toBeVisible();
    await expect(productsTitle).toHaveText("Products");
  });

  test.afterEach("After Each", () => {
    console.log("After each function is executed");
  });

  test.afterAll("After All", () => {
    console.log("After all function is executed");
  });


});