import { test, expect } from "@playwright/test";

test("Open Multiple tabs in a Same Browser", async ({ context }) => {
  // first tab
  let tab1 = await context.newPage();
  await tab1.goto("https://www.google.com");
  //await tab1.waitForTimeout(2000);

  // second tab
  let tab2 = await context.newPage();
  await tab2.goto("https://www.github.com");
  //await tab2.waitForTimeout(2000);

  // third tab
  let tab3 = await context.newPage();
  await tab3.goto("https://www.linkedin.com");
  //await tab3.waitForTimeout(2000);

  // fourth tab
  let tab4 = await context.newPage();
  await tab4.goto("https://www.loopcamp.io");
  //await tab4.waitForTimeout(2000);

  //---------------------------------------
  // validating something in FIRST Tab
  // let searchBox = tab1.locator("//textarea[@aria-label='Search']");
  // await expect(searchBox).toBeVisible();

  // validating something in SECOND Tab
  let emailBox = tab2.locator("(//input[@name='user_email']) [1]");
  await expect(emailBox).toBeVisible();

  // validating something in THIRD Tab
//   let navigationLogo = tab3.locator("//icon[@data-test-id='nav-logo']");
//   await expect(navigationLogo).toBeVisible();

  // validating something in FOURTH Tab
  await expect(tab4.locator("//div[@id='comp-lk5tbxga']//a")).toBeVisible();
  //let loopcampLogo = tab4.locator("//div[@id='comp-lk5tbxga']//a");
  //await expect (loopcampLogo).toBeVisible();

  tab1.bringToFront();
  tab2.waitForTimeout(2000);
});
