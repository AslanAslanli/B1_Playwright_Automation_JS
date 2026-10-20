import { test, expect } from "@playwright/test";

test.describe("Day 13 Tasks - 4, 5, ..., 9 - Alert Test Group", () => {
  let jsAlerButton;
  let jsConfirmButton;
  let jsPromptButton;
  let resultTextElement;

  test.beforeEach("Before each", async ({ page }) => {
    await page.goto(`${process.env.BASE_URL}/javascript_alerts`);
    jsAlerButton = page.getByRole("button", { name: "Click for JS Alert" });
    jsConfirmButton = page.getByRole("button", {
      name: "Click for JS Confirm",
    });
    jsPromptButton = page.getByRole("button", { name: "Click for JS Prompt" });

    resultTextElement = page.locator("//p[@id='result']");
  });

  test("Task 4, 5", async ({ page }) => {
    page.on("dialog", async (alert) => {
      console.log(alert.message());
      await alert.accept();
    });

    await jsAlerButton.click();
    await expect(resultTextElement).toHaveText(
      "You successfully clicked an alert",
    );
  });

  test("Task 6 - JavaScript Confirm - Accept", async ({ page }) => {
    page.on("dialog", async (alert) => {
      console.log(alert.message());
      await alert.accept();
    });

    await jsConfirmButton.click();
    await expect(resultTextElement).toHaveText("You clicked: Ok");
  });

  test("Task 7 - JavaScript Confirm - Dismiss", async ({ page }) => {
    page.on("dialog", async (dialog) => {
      console.log(dialog.message());
      await dialog.dismiss();
    });

    await jsConfirmButton.click();
    await expect(resultTextElement).toHaveText("You clicked: Cancel");
  });

  test("Task #8 - JavaScript Prompt", async ({ page }) => {
    page.on("dialog", async (alert) => {
      console.log(alert.message());
      await alert.accept("Playwright Automationnnnn");
    });

    await jsPromptButton.click();
    await expect(resultTextElement).toHaveText(
      "You entered: Playwright Automation",
    );
  });

  test.afterEach("After each", async ({ page }) => {
    console.log("Alert test completed");
  });
});
