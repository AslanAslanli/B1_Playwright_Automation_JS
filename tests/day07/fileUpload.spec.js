import {test, expect} from "@playwright/test";
import path from 'path';

test("File Upload", async({page}) => {
    await page.goto("http://the-internet.herokuapp.com/upload");

    let filePath = path.join(__dirname, './uploads', 'images.jpg');
    
    let chooseFile = page.locator("//input[@id='file-upload']");
    let submitButton = page.locator("//input[@id='file-submit']");

    await page.setInputFiles("//input[@id='file-upload']", filePath);
    await submitButton.click();

    let textMessage = page.locator("//h3");
    await expect(textMessage).toHaveText("File Uploaded!")

    await page.waitForTimeout(2000);
});