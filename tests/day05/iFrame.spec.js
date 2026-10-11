import { test, expect } from "@playwright/test";

test("iFrame Practice", async ({ page }) => {
  await page.goto(`${process.env.LC_PRACTICE_BASE_URL}/iframe.html`);
  let textIFrame = page.frameLocator("//iframe[@class='tox-edit-area__iframe']");
  let textInputArea = textIFrame.locator("//body[@id='tinymce']");

  await textInputArea.fill("koko moko jumbo");
});
