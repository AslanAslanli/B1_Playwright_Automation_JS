import { test, expect } from "@playwright/test";

test.describe("Day 14 - Webtables", () => {
  let table1;
  let headers_T1;
  let tbodyRows_T1;
  let allCells_T1;

  let table2;
  let headers_T2;
  let tbodyRows_T2;
  let allCells_T2;

  test.beforeEach("Base url landing - Heroku Tables", async ({ page }) => {
    await page.goto("https://the-internet.herokuapp.com/tables");

    table1 = page.locator("//*[@id='table1']");
    headers_T1 = await page.locator("//*[@id='table1']/thead/tr/th").all();
    tbodyRows_T1 = await page.locator("//*[@id='table1']/tbody/tr").all();
    allCells_T1 = page.locator("//table[@id='table1']/tbody/tr/td").all();

    table2 = page.locator("//*[@id='table2']");
    headers_T2 = await page.locator("//*[@id='table2']/thead/tr/th").all();
    tbodyRows_T2 = await page.locator("//*[@id='table2']/tbody/tr").all();
    allCells_T2 = page.locator("//table[@id='table2']/tbody/tr/td").all();
  });

  test("Task #9 - Read All Web Table Rows", async ({ page }) => {
    for (const eachRow of tbodyRows_T1) {
      console.log(await eachRow.innerText());
    }

    console.log(tbodyRows_T1.length);

    let bodyHeader_t1 = page.locator("//*[@id='table1']/tbody/tr");
    for (let i = 0; i < (await bodyHeader_t1.count()); i++) {
      console.log(await bodyHeader_t1.nth(i).innerText());
    }
  });

  test("Task 10, 11 - Find John, Read a cell", async ({ page }) => {
    // Task #10 - Find John Smith
    for (let i = 0; i < tbodyRows_T1.length; i++) {
      const element = tbodyRows_T1[i];
      if ((await tbodyRows_T1[i].innerText()).includes("jsmith@gmail.com")) {
        console.log(await element.innerText());
        break;
      }
    }

    for (let i = 0; i < tbodyRows_T1.length; i++) {
      const element = tbodyRows_T1[i];
      if ((await tbodyRows_T1[i].innerText()).includes("jdoe@hotmail.com")) {
        console.log(await element.locator("//td[3]").innerText());
        await expect(element.locator("//td[3]")).toHaveText("jdoe@hotmail.com");
      }
    }
  });

  test("Task 12 - Validate Multiple Columns", async ({ page }) => {
    for (let i = 0; i < tbodyRows_T1.length; i++) {
      if ((await tbodyRows_T1[i].innerText()).includes("Conway")) {
        let allCells = await tbodyRows_T1[i].locator("//td").all();
        // console.log(allCells);
        await expect(allCells[0]).toHaveText("Conway");
        await expect(allCells[1]).toHaveText("Tim");
        await expect(allCells[2]).toHaveText("tconway@earthlink.net");
        await expect(allCells[3]).toHaveText("$50.00");
        await expect(allCells[4]).toHaveText("http://www.timconway.com");
      }
      break;
    }
  });

  test("Task #13, 14 - Click an Action in a Matching Row", async ({ page }) => {
    for (let i = 0; i < tbodyRows_T1.length; i++) {
      console.log("asdsad");
      if ((await tbodyRows_T1[i].innerText()).includes("fbach@yahoo.com")) {
        let cellValues = await tbodyRows_T1[i].locator("//td").all();
        console.log("First Name: " + (await cellValues[1].innerText()));
        console.log("Last Name: " + (await cellValues[0].innerText()));
        console.log("Email: " + (await cellValues[2].innerText()));
        console.log("Due: " + (await cellValues[3].innerText()));
        console.log("Web site: " + (await cellValues[4].innerText()));

        await expect(await cellValues[0]).toHaveText("Bach");
        await expect(await cellValues[1]).toHaveText("Frank");
        await expect(await cellValues[2]).toHaveText("fbach@yahoo.com");
        await expect(await cellValues[3]).toHaveText("$51.00");
        await expect(await cellValues[4]).toHaveText("http://www.frank.com");

        break;
      }
    }
  });
  
  
  test("Task #15 - Web Table Assertions", async({page}) => {
    await expect(table1).toBeVisible();

      for (let i = 0; i < tbodyRows_T1.length; i++) {
        if((await tbodyRows_T1[i].innerText()).includes("jsmith@gmail.com")){
            await expect(tbodyRows_T1[i]).toBeVisible();
            await expect(tbodyRows_T1[i]).toContainText("jsmith@gmail.com $50.00 http://www.jsmith.com");
        }
      }
  });

});
