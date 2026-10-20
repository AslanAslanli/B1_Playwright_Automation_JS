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

  test.describe("Bonus Task - Advanced Playwright Practice", () => {
    test("Test 1", async ({ page }) => {
      await page.goto(process.env.SAUCEDEMO_URL);

      const sauceUsername = page.getByPlaceholder("Username");
      const saucePassword = page.getByPlaceholder("Password");
      const loginButton = page.getByText("Login");

      await sauceUsername.fill(process.env.SAUCE_USERNAME);
      await saucePassword.fill(process.env.SAUCE_PASSWORD);
      await loginButton.click();

      let products = await page
        .locator("//div[normalize-space(@class)='inventory_item_name']")
        .all();
      for (const eachProduct of products) {
        console.log(await eachProduct.textContent());
      }

      for (const eachProduct of products) {
        if ((await eachProduct.textContent()) === "Sauce Labs Onesie") {
          await eachProduct.click();
          break;
        }
      }

      const productTitle = page.getByText("Sauce Labs Onesie", { exact: true });
      expect(await productTitle.textContent()).toContain("Sauce Labs Onesie");
      //await page.waitForTimeout(2000);
    });

    test("Test 2", async ({ page }) => {
      await page.goto(
        `${process.env.LC_PRACTICE_BASE_URL}/javascript-alerts.html`,
      );

      page.on("dialog", async (dialog) => {
        await dialog.accept("Loopcamp Student");
      });

      const promptAlertButton = page.getByRole("button", {
        name: "Click for JS Prompt",
      });
      await promptAlertButton.click();

      const successMessage = page.getByText("You entered: Loopcamp Student");
      await expect(successMessage).toHaveText("You entered: Loopcamp Student");
      // await page.waitForTimeout(3000);
    });

    test("Test 3", async ({ page }) => {
      await page.goto("https://loopcamp.vercel.app/iframe.html");

      let iFrameLoc = page.frameLocator("#mce_0_ifr");
      const editArea = iFrameLoc.locator("//body[@id='tinymce']");

      await editArea.fill("Final Playwright Practice");
      await expect(editArea).toHaveText("Final Playwright Practice");
      //await page.waitForTimeout(3000);
    });
  });
});
