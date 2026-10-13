import { test, expect } from "@playwright/test";

test.describe("Day 13 - iFrame tests", () => {
  test("Task 10, 11", async ({ page }) => {
    page.goto(`${process.env.LC_PRACTICE_BASE_URL}/iframe.html`);

    const frameLocator = page.frameLocator("//iframe[@id='mce_0_ifr']");
    const textArea = frameLocator.locator("//body[@id='tinymce']");

    await textArea.fill("Playwright iFrame Practice");
    await expect(textArea).toHaveText("Playwright iFrame Practice");
    //await page.waitForTimeout(3000);
  });

  // Question: Which element belongs to the main page and which belongs to the iframe?
  // Answer: TinyMCE belongs to main page. Text area belongs to iFrame
  test("Task 12", async ({ page }) => {
    page.goto(`${process.env.LC_PRACTICE_BASE_URL}/iframe.html`);

    const frameLocator = page.frameLocator("//iframe[@id='mce_0_ifr']");
    const textArea = frameLocator.locator("//body[@id='tinymce']");

    await textArea.fill("Playwright iFrame Practice");
    await expect(textArea).toHaveText("Playwright iFrame Practice");
  });
  // - Login.
  // - Get all product names using .all().
  // - Loop through them.
  // - Print each name.
  // - Find and click: Sauce Labs Onesie
  // - Assert the detail page contains: Sauce Labs Onesie

  //   Test 2 - JavaScript Dialog URL:
  //   https://the-internet.herokuapp.com/javascript_alerts

  // - Trigger the JS Prompt.
  // - Handle it using page.on().
  // - Enter: Loopcamp Student
  // - Accept it.
  // - Assert Result contains: You entered: Loopcamp Student

  //   Test 3 - iFrame URL:
  //   https://the-internet.herokuapp.com/iframe

  // - Access the iframe.
  // - Locate the editable area.
  // - Enter: Final Playwright Practice
  // - Assert it contains: Final Playwright Practice
  test.describe("Bonus Task - Advanced Playwright Practice", () => {
    test("Test 1", async ({ page }) => {
      await page.goto(process.env.SAUCEDEMO_URL);

      const sauceUsername = page.getByPlaceholder("Username");
      const saucePassword = page.getByPlaceholder("Password");
      const loginButton = page.getByText("Login");

      await sauceUsername.fill(process.env.SAUCE_USERNAME);
      await saucePassword.fill(process.env.SAUCE_PASSWORD);
      await loginButton.click();

      let products = await page.locator("//div[normalize-space(@class)='inventory_item_name']").all();
      for (const eachProduct of products) {
        console.log(await eachProduct.textContent());
      }

    });

    test("Test 2", async ({ page }) => {});

    test("Test 3", async ({ page }) => {});
  });
});
