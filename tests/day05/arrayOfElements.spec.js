import { expect, test } from '@playwright/test';

/*
    Task:
        1. Verify that there are exactly 50 link elements which in the <ul> tag
        2. Verify that each of the 50 link elmenets which the <ul> tag is visible and clickable
        3. Verify that each of the 50 link elmenets which the <ul> tag has href attribut
*/


test.describe ("Array of Elements", () => {
    let allLinks;
    let allLinks2;

    test.beforeEach(async ({page}) => {
       await page.goto(process.env.LC_PRACTICE_BASE_URL);
       //await page.waitForTimeout(3000);
       allLinks = await page.locator("//ul[@class='list-group list-group-flush']/li/a").all();
       allLinks2 = page.locator("//ul[@class='list-group list-group-flush']/li/a");
    });

    
    test('erify that there are exactly 50 link elements which in the <ul> tag', async ({ page }) => { 
        expect ((allLinks).length).toBe(50);
    });


    test('Verify that each of the 50 link elmenets which the <ul> tag is visible and clickable', async ({ page }) => {       
        for (let eachElem of allLinks) {
            await expect (eachElem).toBeVisible();
            await expect (eachElem).toBeEnabled();    
        }
    });


    test('Verify that each of the 50 link elmenets which the <ul> tag has href attribut', async ({ page }) => { 
        for (let eachElem of allLinks) {
            //expect (eachElem.innerHTML()).toContain("href");   
            //console.log(eachElem.innerHTML()); 
            console.log(await eachElem.getAttribute("href"));
            expect (await eachElem.getAttribute("href")).not.toBeNull();
            await expect (eachElem).toHaveAttribute("href");

            const n = await allLinks2.count();
            for (let i = 0; i < n; i++) {
               console.log(allLinks2.nth(i)); 
            }
        }
    });

});