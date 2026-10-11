import { test } from "@playwright/test";

test("Simple Google Search", {tag : "@smoke"},async ({ page }) => {
  // hard codeded wait. thread.sleep()

  await page.goto("https://www.google.com/");
  // await page.waitForTimeout(3000);

  let searchBox = page.getByRole('combobox', { name: 'Axtarış' });
  await searchBox.fill("Playwright Automation");
  // await page.waitForTimeout(3000);
  
  await searchBox.press("Enter");
  // await page.waitForTimeout(3000);
  

});



test("YouTube page navigation", {tag: "@regres"}, async ({ page }) => {

  await page.goto("https://www.youtube.com/");
  //let searchBox = page.getByRole('combobox', { name: 'Search' });
  let searchBox = page.locator("//input[@placeholder='Search']");
  await searchBox.click();
  await searchBox.fill("Minions");
  // await page.waitForTimeout(3000);

  await searchBox.press("Enter");
  // await page.waitForTimeout(3000);

  let firstVideo = page.locator("(//a[@id='video-title'])[1]");
  //let firstVideo = page.getByText('Minions - Funniest Scenes', { exact: true });
  await firstVideo.click();
  // await page.waitForTimeout(3000);
});
