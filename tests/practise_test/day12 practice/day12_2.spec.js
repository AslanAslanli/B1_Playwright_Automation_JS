import { test, expect } from "@playwright/test";

test.describe("SauceDemo Assertion Tests", () => {
  let sauceUsername;
  let saucePassword;
  let loginButton;

  let productsTitle;
  let shoppingCart;
  let backpackAddToCart;

  test.beforeEach("Before each - Login", async ({ page }) => {
    await page.goto(process.env.SAUCEDEMO_URL);
    sauceUsername = page.locator("#user-name");
    saucePassword = page.locator("#password");
    loginButton = page.locator("#login-button");

    await sauceUsername.fill(process.env.SAUCE_USERNAME);
    await saucePassword.fill(process.env.SAUCE_PASSWORD);
    await loginButton.click();

    productsTitle = page.getByText("Products");
    shoppingCart = page.locator("//a[@class='shopping_cart_link']");
    backpackAddToCart = page.locator("//button[@id='add-to-cart-sauce-labs-backpack']");
  });

  test("Products Title", async ({ page }) => {
    await expect(productsTitle).toBeVisible();
  });

  test("Shopping Cart", async ({ page }) => {
    await expect(shoppingCart).toBeVisible();
  });

  test("Add to Cart Button", async ({}) => {
    await expect(backpackAddToCart).toBeVisible();
    await expect(backpackAddToCart).toBeEnabled();
  });

  test.afterEach("After each", () => {
    console.log("AfterEach functino is exeucted");
  });
});
