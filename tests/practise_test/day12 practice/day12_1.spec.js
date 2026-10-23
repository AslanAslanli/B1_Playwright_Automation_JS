/*
1.  Run ALL tests.
  npx playwright test day12_1
2.  Run ONLY the tests with the @smoke tag.
  npx playwright test day12_1 --grep "@smoke"

3.  Run ONLY the tests with the @regression tag.
  npx playwright test day12_1 --grep "@regression"

4.  Add the Terminal commands you used as comments at the bottom of your
    test file.

    */

import { test, expect } from "@playwright/test";

test.describe("Day 12 Playwright tasks - Task 1", () => {
  let sauceUsername;
  let saucePassword;
  let loginButton;

  let products;

  test.beforeEach("BeforeEach - element initiation", async ({ page }) => {
    // await page.goto("https://www.saucedemo.com/");
    //await page.goto(`${process.env.SAUCEDEMO_URL}`);

    sauceUsername = page.locator("#user-name");
    saucePassword = page.locator("#password");
    loginButton = page.locator("#login-button");
  });

  test("Test 1 - Day_12_Task_1", async ({ page }) => {
    await expect(sauceUsername).toBeVisible();
    await expect(saucePassword).toBeVisible();

    await expect(loginButton).toBeVisible();
    await expect(loginButton).toBeEnabled();
  });

  test("Test 3 - Day_12_Task_1", async ({ page }) => {
    await sauceUsername.fill(process.env.SAUCE_USERNAME);
    await saucePassword.fill(process.env.SAUCE_PASSWORD);
    await loginButton.click();

    products = page.getByText("Products");
    await expect(products).toBeVisible();
  });
});

//   Test 2: Test name: Playwright Website Tag: @regression
test("Test 2 - Day_12_Task_1", { tag: "@regression" }, async ({ page }) => {
  await page.goto(`${process.env.PLAYWRIGHT_URL}`);
  // const getStartedLink = page.locator("//*[.='Get started']");
  // const getStartedLink2 = page.getByText("Get started");
  const getStartedLink3 = page.getByRole("link", { name: "Get started" });
  // const getStartedLink4 = page.getByLabel("Get started");
  await getStartedLink3.click();

  await expect(getStartedLink3).toBeVisible();
});

test("Hover Practice", { tag: "@regression" }, async ({ page }) => {
  await page.goto(`${process.env.BASE_URL}/hovers`);
  const firstImage = page.locator(
    "//h5[.='name: user1']/../preceding-sibling::img",
  );
  const viewProfile = page.locator("//a[@href='/users/1']");

  await firstImage.hover();
  await page.waitForTimeout(3000);
  await expect(viewProfile).toBeVisible();
});
