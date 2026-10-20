import { test } from "@playwright/test";

// 1
test("Bing Search", async ({ page }) => {
  await page.goto("https://www.bing.com");

  let searchBox = page.getByRole("combobox", {
    name: "Enter your search here - Search suggestions will show as you type",
  });
  await searchBox.click();
  await searchBox.fill("Playwright Automation");

  await searchBox.press("Enter");
});

// 2
test("DuckDuckGo Search", async ({ page }) => {
  await page.goto("https://www.duckduckgo.com");

  let searchBox = page.locator(
    "//textarea[@aria-label='Search with DuckDuckGo']",
  );
  await searchBox.fill("JavaScript Automation");
  await page.waitForTimeout(2000);
  await page.press("Enter");
});

// 3
test("Playwright Website Navigation", async ({ page }) => {
  await page.goto("https://playwright.dev");
  let getStartedButton = page.locator("//a[.='Get started']");
  await getStartedButton.click();
  let writingTestLink = page.locator("//a[.='Writing tests']");
  await writingTestLink.click();
});

// 4
test("Playwright Documentation Search", async ({ page }) => {
  await page.goto("https://playwright.dev");

  let searchButton = page.locator(
    "//span[@class = 'DocSearch-Button-Placeholder' and .='Search']",
  );
  await searchButton.click();

  let searchBox = page.locator("//input[@id='docsearch-input']");
  searchBox.fill("locators");
  await page.waitForTimeout(3000);

  let searchResult = page.locator("//span[text()='Assertions']");
  searchResult.click();
  await page.waitForTimeout(3000);
});

// 5
test("Youtube Playwright Search", async ({ page }) => {
  await page.goto("https://www.youtube.com");

  let searchBox = page.locator("//input[@name='search_query']");
  await searchBox.click();
  await searchBox.fill("Playwright Automation Tutorial");
  await searchBox.press("Enter");

  let searchResult = page.locator(
    "(//a[@class='ytLockupMetadataViewModelTitle'])[1]",
  );
  await searchResult.click();
});

// 6
test("Playwright Hover Practice", async ({ page }) => {
  await page.goto("https://the-internet.herokuapp.com/hovers");

  let avatar3Element = page.locator("(//img[@src='/img/avatar-blank.jpg'])[3]");
  await avatar3Element.hover();

  let viewProfile = page.locator("//h5[.='name: user3']/following-sibling::a");
  await viewProfile.click();
});

// 7
test("Form Input Practise", async ({ page }) => {
  await page.goto("https://www.saucedemo.com");

  let usernameField = page.getByLabel("Username");
  await usernameField.fill("standard_user");

  let passwordField = page.getByLabel("Password");
  await passwordField.fill("secret_sauce");

  let loginButton = page.getByRole("button", { name: "Login" });
  await loginButton.click();

  let product = page.locator("//div[text()= 'Sauce Labs Backpack']");
  await product.click();
});

// 8
test("Keyboard Press Practice", async ({ page }) => {
  await page.goto("https://the-internet.herokuapp.com/key_presses");

  let inputField = page.locator("//input[@id='target']");

  await inputField.click();
  await inputField.press("Enter");
  await inputField.press("Escape");
  await inputField.press("Tab");
});

// 9
test("SauceDemo Shopping Practice", async ({ page }) => {
  await page.goto("https://www.saucedemo.com");

  let usernameField = page.getByLabel("Username");
  await usernameField.fill("standard_user");

  let passwordField = page.getByLabel("Password");
  await passwordField.fill("secret_sauce");

  let loginButton = page.getByRole("button", { name: "Login" });
  await loginButton.click();

  let product = page.locator("//div[text()= 'Sauce Labs Backpack']");
  await product.click();

  let addToCart = page.locator("//button[text()='Add to cart']");
  await addToCart.click();

  let cart = page.locator("//a[@class='shopping_cart_link']");
  await cart.click();

  let continueShopping = page.locator("//button[@id='continue-shopping']");
  await continueShopping.click();

  let product2 = page.locator("//div[text()='Sauce Labs Bike Light']");
  await product2.click();

  // page.set
});
