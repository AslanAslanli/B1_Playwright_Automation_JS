import {test} from "@playwright/test";

test.describe("Interview test questions for automation", () => {

    test("Palma photography page navigation", async({page}) => {
       await page.goto("https://palmaphotography.co/");

       //const galeryLink = page.locator("//nav[@class='se-t sie-main-header_3-text st-m-paragraph st-d-subheading']");
       const galleryLink = page.getByRole('link', { name: 'Gallery'});
       await galleryLink.click(); 


    });

});