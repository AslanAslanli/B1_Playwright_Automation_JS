import { test, expect } from "@playwright/test";

test.describe("Day 13 - Task 1 and 2", () => {
  let sauceUsername;
  let saucePassword;
  let loginButton;

  let productNames;
  let productNames2;

  test.beforeEach("Sauce Demo Login", async ({ page }) => {
    await page.goto(process.env.SAUCEDEMO_URL);

    sauceUsername = page.getByPlaceholder("Username");
    saucePassword = page.getByPlaceholder("Password");
    loginButton = page.getByText("Login");

    await sauceUsername.fill(process.env.SAUCE_USERNAME);
    await saucePassword.fill(process.env.SAUCE_PASSWORD);
    await loginButton.click();

    productNames = await page.locator("//div[@class='inventory_item_name ']").all();
    productNames2 = page.locator("//div[@class='inventory_item_name ']");
  });

  test("Task 1 and 2", async ({ page }) => {
    //await page.waitForTimeout(3000);
    for (const element of productNames) {
      console.log(await element.innerText());
    }

    for (let i = 0; i < (await productNames2.count()); i++) {
      await productNames2.nth(1).click();
      let productText = page.locator("//*[.='Sauce Labs Bike Light']");
      await expect(productText).toBeVisible();
    }
  });

  test("Task 3", async ({ page }) => {
    for (const product of productNames) {
      if ((await product.innerText()) === "Sauce Labs Fleece Jacket") {
        console.log("Product found");
        await product.click();
        await expect(page.locator(".inventory_details_name")).toHaveText("Sauce Labs Fleece Jacket");
        break;
      }
    }
  });

  
});
