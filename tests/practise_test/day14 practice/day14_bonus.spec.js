import { test, expect } from "@playwright/test";

test.describe("Day 14 - Bonus", () => {
  test("Test 1 - Mouse", async ({ page }) => {
    await page.goto("https://the-internet.herokuapp.com/hovers");

    const user2Element = page.locator("//h5[.='name: user2']/../../img");
    await user2Element.hover();

    const textMessage = page.locator("//h5[.='name: user2']");
    await expect(textMessage).toHaveText("name: user2");

    const viewProfile = page.locator(
      "//h5[.='name: user2']/following-sibling::a",
    );
    await expect(viewProfile).toBeVisible();
  });

  test("Test 2 - Keyboard", async ({ page }) => {
    await page.goto("https://the-internet.herokuapp.com/inputs");
    const textInput = page.locator("//input[@type='number']");
    await textInput.click();

    await page.keyboard.type("10");
    await page.keyboard.press("ArrowUp");
    await page.keyboard.press("ArrowUp");
    await page.keyboard.press("ArrowUp");
    await page.keyboard.press("ArrowUp");
    await page.keyboard.press("ArrowUp");

    await page.keyboard.press("ArrowDown");
    await page.keyboard.press("ArrowDown");
    await page.keyboard.press("ArrowDown");

    console.log(await textInput.inputValue());
    await expect(textInput).toHaveValue("12");
    await page.waitForTimeout(2000);
  });

  test("Test - Web Table", async ({ page }) => {
    await page.goto("https://the-internet.herokuapp.com/tables");

    const table1 = page.locator("#table1");
    const allRows = await table1.locator("tbody tr").all();
    let foundJasonDoe = false;

    for (let i = 0; i < allRows.length; i++) {
      const row = allRows[i];

      if ((await row.innerText()).includes("jdoe@hotmail.com")) {
        let cellValues = await row.locator("td").allTextContents();
        console.log(cellValues);

        expect(cellValues.splice(0, 5)).toEqual([
          "Doe",
          "Jason",
          "jdoe@hotmail.com",
          "$100.00",
          "http://www.jdoe.com",
        ]);

        await row.getByRole("link", {name: "edit"}).click();

        foundJasonDoe = true;
        break;
      }
    }

    expect(foundJasonDoe).toBeTruthy();
  });
});
