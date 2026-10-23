import { test } from "@playwright/test";

/*
 !Bingo search test
 ?Colore
 *del amigo
*/

// test('Bingo search @smoke', async ({ page }) => {
test('Bingo search', {tag: ["@smoke", "@regress"]}, async ({ page }) => {

  await page.goto("https://www.bing.com");

  let searchBox = page.locator("//input[@id='sb_form_q']");
  await searchBox.click();  
  // await searchBox.fill("Playwright Automation");
  
  await page.keyboard.type("Playwright Automation");
  await searchBox.press("Enter");

});
