import { test, expect } from "@playwright/test";

test.describe("Day 14 - Mouse actions - T: 1,..., 4", () => {
  test("Task 1, 2", async ({ page }) => {
    await page.goto("https://testautomationpractice.blogspot.com/");

    // Task 1 - Hover
    //const pointMeButton = page.getByRole("button", { name: "Point Me" });
    //await pointMeButton.hover();

    // Task 2 - Double Click
    //const doubleClickText = page.locator("//*[.='Double Click']");
    //await doubleClickText.hover();
    const copyTextElement = page.getByRole("button", { name: "Copy Text" });
    const field1 = page.locator("#field1");
    const field2 = page.locator("#field2");

    await expect(field1).toHaveValue("Hello World!");
    //await page.waitForTimeout(2000);
    await copyTextElement.dblclick();
    //await page.waitForTimeout(2000);
    await expect(field2).toHaveValue("Hello World!");
  });

  test("Task 3, 4", async ({ page }) => {    

    // Task 3 - Right Click
    await page.goto("https://swisnl.github.io/jQuery-contextMenu/demo.html");
    const editOption = page.locator("//span[.='Edit']");
    await page.click("//span[.='right click me']", {button: "right"});
    await expect(editOption).toBeVisible();
    // await page.waitForTimeout(2000);

    //   Task #4 - Drag and Drop
    await page.goto("https://loopcamp.vercel.app/drag-and-drop.html");
    const elementA = page.locator("#column-a");
    const elementB = page.locator("#column-b");
    
    await elementA.dragTo(elementB);
    //await page.waitForTimeout(2000);
    await page.dragAndDrop("#column-b", "#column-a");
    //await page.waitForTimeout(2000);

    // await page.waitForTimeout(2000);
  });

});
