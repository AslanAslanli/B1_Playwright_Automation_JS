import { test, expect } from "@playwright/test";

test.describe("Element Assertions", () => {
  let sauceUsername;
  let saucePassword;
  let loginButton;

  let productsTitle;
  let shoppingCart;
  let backpackAddToCart;

  test.beforeEach("Before Each", async ({ page }) => {
    console.log("Before each function is executed ");

    await page.goto(process.env.SAUCEDEMO_URL);
    sauceUsername = page.locator("#user-name");
    saucePassword = page.locator("#password");
    loginButton = page.locator("#login-button");

    productsTitle = page.getByText("Products");
    shoppingCart = page.locator("//a[@class='shopping_cart_link']");
    backpackAddToCart = page.locator("//button[@id='add-to-cart-sauce-labs-backpack']");
  });

  test("SauceDemo Element Assertions", async ({ page }) => {
    await expect(sauceUsername).toBeVisible();
    await expect(sauceUsername).toBeEnabled();

    await expect(saucePassword).toBeVisible();
    await expect(saucePassword).toBeEnabled();

    await expect(loginButton).toBeVisible();
    await expect(loginButton).toBeEnabled();

    await sauceUsername.fill(process.env.SAUCE_USERNAME);
    await saucePassword.fill(process.env.SAUCE_PASSWORD);
    await loginButton.click();

    await page.waitForTimeout(2000);

    await expect(productsTitle).toBeVisible();
    await expect(productsTitle).toHaveText("Products");

    await expect(shoppingCart).toBeVisible();
  });
});
