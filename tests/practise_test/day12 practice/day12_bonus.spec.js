// 1.  The complete suite. -- npx playwright test day12_bonus
// 2.  Only @smoke. -- npx playwright test day12_bonus -g "@smoke"
// 3.  Only @regression. -- npx playwright test day12_bonus --grep "@regression"

// Observe: - Which tests execute - Which hooks execute - How many times
// each hook executes - How Playwright reports the failed soft assertion

import {test, expect} from "@playwright/test";

test.describe("Login Regression Suite", () => {

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

  test("Test 1: Field Validations", async({page}) => {
    await expect(sauceUsername).toBeVisible();
    await expect(saucePassword).toBeVisible();
    await expect(loginButton).toBeVisible();
  });

  test("Test 2: JavaScript value assertions", async({page}) => {
    let course = "Playwright"; 
    let students = 20; 
    let active = true;

    expect (course).toEqual("Playwright");
    expect (students).toEqual(20);
    expect (active).toBeTruthy();
  });

  test("Test 3: Name: Soft Assertions", {tag: "@regression"}, async({page}) => {
    let expectedBrowser = "Chrome"; 
    let actualBrowser = "Firefox";
    expect.soft(expectedBrowser).toEqual(actualBrowser);
    console.log("Soft assertion allowed execution to continue");
    expect.soft(expectedBrowser).toEqual("Chrome");
  });

  test("Test 4: Login Test", {tag: "@regression"}, async({page}) => {
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