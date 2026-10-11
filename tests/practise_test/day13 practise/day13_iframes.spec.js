// MAIN PAGE:
// 1. Locate the heading: An iFrame containing the TinyMCE WYSIWYG Editor
// --> let alert = page.locator("//div[@role='alert']");
// 2. Assert it is visible.
// --> alert.toBeVisible();

// IFRAME:
// 3. Access the iframe.
// 4. Locate the editable area.
// 5. Assert it is visible.
// 6. Enter: Loopcamp Playwright
// 7. Assert it contains: Loopcamp Playwright

// Question: Which element belongs to the main page and which belongs to the iframe?
// alert message to main page. text area to iFrame

//   Test 2 - JavaScript Dialog URL:
//   https://the-internet.herokuapp.com/javascript_alerts

// - Trigger the JS Prompt.
// - Handle it using page.on().
// - Enter: Loopcamp Student
// - Accept it.
// - Assert Result contains: You entered: Loopcamp Student

import { test, expect } from "@playwright/test";
import { log } from "node:console";

test.describe("Advanced Playwright Practice", () => {

  test.describe("Test 1", () => {
    let sauceUsername;
    let saucePassword;
    let loginButton;

    let allProducts;

    test.beforeEach("Before each", async ({ page }) => {
      await page.goto(`${process.env.SAUCEDEMO_URL}`);
      sauceUsername = page.locator("#user-name");
      saucePassword = page.locator("#password");
      loginButton = page.locator("#login-button");

      // login
      await sauceUsername.fill(process.env.SAUCE_USERNAME);
      await saucePassword.fill(process.env.SAUCE_PASSWORD);
      await loginButton.click();

      await page.waitForTimeout(3000);

      allProducts = await page.locator("//div[@class='inventory_item_name ']").all();
    });

    test("Sauce demo test", async ({ page }) => {
      for (const product of allProducts) {
        console.log(await product.textContent());
      }

      for (const product of allProducts) {
        if (await product.textContent().toBe("Sauce Labs Onesie")) {
          await product.click();
          await page.waitForTimeout(3000);
          let productTitle = page.getByText('Sauce Labs Onesie');
          await expect(productTitle).toBeVisible();
          break;
        }
      }
    });
  });

  test.describe("Test 3", () => {
    let iFrame;
    let textArea;

    test.beforeEach(async ({ page }) => {
      await page.goto(`${process.env.LC_PRACTICE_BASE_URL}/iframe.html`);
      iFrame = page.frameLocator("iframe.tox-edit-area__iframe");
      textArea = iFrame.locator("body#tinymce");
    });

    test("Task10, 11, 12, 13", async () => {
      await textArea.fill("Playwright iFrame Practice");
      await expect(textArea).toHaveText("Playwright iFrame Practice");
    });
  });
});
