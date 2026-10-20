import { test, expect } from "@playwright/test";

test("Multiple Windows - Windows popup", async ({ page }) => {
  let newPopupEventPromise = page.waitForEvent("popup");

  // await page.goto("https://loopcamp.vercel.app/windows.html");
  await page.goto(`${process.env.LC_PRACTICE_BASE_URL}/windows.html`);
  // await page.goto("windows.html");

  const clickHere = page.getByRole("link", { name: "Click Here" });
  await clickHere.click();

  let newTab = await newPopupEventPromise;
  await expect (newTab).toHaveTitle("New Window");  
  
  await page.bringToFront();
  await expect (page).toHaveTitle("Windows");

  await newTab.bringToFront();
 
  let allTabs = page.context().pages();
  for (const tab of allTabs) {
    // console.log(allTabs.length);
    // await tab.bringToFront();
    console.log(await tab.title());
  }  

  await newTab.close();
  await page.waitForTimeout(2000);

});
