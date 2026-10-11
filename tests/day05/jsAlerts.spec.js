import {test, expect} from "@playwright/test";

test.describe("Alerts Practice", () => {
    let clickForJSAlert;
    let clickForJSConfirm;
    let clickForJSPrompt;

    test.beforeEach("", async({page}) => {
        await page.goto(`${process.env.LC_PRACTICE_BASE_URL}/javascript-alerts.html`);
        clickForJSAlert = page.getByText("Click for JS Alert");
        clickForJSConfirm = page.getByText("Click for JS Confirm");
        clickForJSPrompt = page.getByText("Click for JS Prompt");
    });
    
    test("Basic JS Alert", async({page}) => {
        // declaring alert. but pl handles it automatically since it is basic
        page.on("dialog", async(dialog) => {
            console.log(`Alert message ${dialog.message()}`);
            await dialog.accept();
        });

        await clickForJSAlert.click();
        await page.waitForTimeout(1000);
    });

    test("Confirmation Alert", async({page}) => {
        // declaring confirm alert. but pl handles it automatically with CANCEL
        page.on("dialog", async(alert) => {
            //await page.waitForTimeout(2000);
            await alert.accept();
            //await page.waitForTimeout(2000);
        });


        await clickForJSConfirm.click();
        await page.waitForTimeout(2000);
    });

    test("Prompt JS Alert", async({page}) => {
        // prompt alert handling. playwright default is cancel.
        page.on("dialog", async(alert) => {
            expect (alert.message()).toBe("I am a JS prompt");
            console.log(alert.message());
            await alert.accept("Aslannnooooo");
        });

        await clickForJSPrompt.click();

        let resultTextElement = page.locator("//*[@id='result']");
        await expect (resultTextElement).toContainText("Aslannnooooo");
    });


});