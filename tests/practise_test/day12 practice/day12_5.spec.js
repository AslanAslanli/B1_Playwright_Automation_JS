// 9.  Locate the Logout button.
// 10. Assert that the Logout button is visible.

import { test, expect } from "@playwright/test";

let pageHeading;

let herokuUsernameField;
let herokuPasswordField;
let loginButton;

let successMessage;
let logoutButton;

test("Login Text Assertions", async ({ page }) => {
  await page.goto(`${process.env.BASE_URL}/login`);
  await page.waitForTimeout(3000);

  herokuUsernameField = page.getByRole("textbox", { name: "Username" });
  herokuPasswordField = page.getByRole("textbox", { name: "Password" });
  loginButton = page.getByRole("button", { name: "Login" });

  // Validation
  pageHeading = page.getByText("Login Page");
  await expect(pageHeading).toHaveText("Login Page");

  // Login
  await herokuUsernameField.fill(process.env.HEROKU_USERNAME);
  await herokuPasswordField.fill(process.env.HEROKU_PASSWORD);
  await loginButton.click();

  successMessage = page.locator("#flash");
  await expect(successMessage).toContainText("You logged into a secure area!")

  logoutButton = page.locator("//i[normalize-space(text())='Logout']");
  await expect(logoutButton).toBeVisible(); 

});
