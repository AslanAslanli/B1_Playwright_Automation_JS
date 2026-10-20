import { test, expect } from "@playwright/test";

test.describe("Day 14 - Keyboard actions - T: 5,..., 8", () => {
  test("Task 5", async ({ page }) => {
    await page.goto("https://www.google.com/");
    const searchBox = page.locator("//textarea[@aria-label='Axtarış']");
    await searchBox.fill("Playwright Automation");
    await page.keyboard.press("Enter");
    // await page.waitForTimeout(2000);
  });

  test("Task 6, 7", async ({ page }) => {
    await page.goto("https://the-internet.herokuapp.com/inputs");

    const searchBox = page.locator("//input[@type='number']");
    await searchBox.click();
    await page.keyboard.type("12345");
    //await page.waitForTimeout(2000);

    await page.keyboard.press("Control+A");
    await page.keyboard.type("999");
    // page.keyboard.up("1");
    // await page.waitForTimeout(2000);
    // page.keyboard.down("2");
    // await page.waitForTimeout(2000);
    await page.keyboard.press("ArrowUp");
    //await page.waitForTimeout(2000);
    await page.keyboard.press("ArrowDown");
    //await page.waitForTimeout(2000);
    await page.keyboard.press("ArrowLeft");
    //await page.waitForTimeout(2000);
    await page.keyboard.press("ArrowRight");
    //await page.waitForTimeout(2000);
  });

  test("Task 8", async ({ page }) => {
    await page.goto("https://www.saucedemo.com/");
    const usernameInput = page.getByPlaceholder("Username");
    await usernameInput.fill(process.env.SAUCE_USERNAME);

    await page.keyboard.press("Tab");
    await page.keyboard.type(process.env.SAUCE_PASSWORD);

    await page.keyboard.press("Tab");
    await page.keyboard.press("Enter");
    //await page.waitForTimeout(2000);

    const products = page.locator("//span[.='Products']");
    await expect(products).toBeVisible();
    await page.waitForTimeout(2000);
  });
});
