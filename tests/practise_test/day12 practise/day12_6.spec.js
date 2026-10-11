// Write assertions that validate:

// 1.  firstName is equal to: John
// 2.  lastName is equal to: Smith
// 3.  age is equal to: 25
// 4.  isStudent is: true
// 5.  tools contains: Playwright
// 6.  tools contains: Postman

// Then create:

// let expectedBrowser = “Chrome”;
// let actualBrowser = “Chrome”;

// 7.  Assert that expectedBrowser and actualBrowser are equal.

// All assertions in this task should PASS.

import { test, expect } from "@playwright/test";

test("Value Assertions Practice", async ({ page }) => {
  let firstName = "John";
  let lastName = "Smith";
  let age = 25;
  let isStudent = true;
  let tools = ["Playwright", "Selenium", "Postman"];

  expect (firstName).toEqual("John");
  expect (lastName).toEqual("Smith");
  expect (age).toEqual(25);
  expect (isStudent).toBeTruthy();
  expect (tools).toContain("Playwright");
  expect (tools).toContain("Postman");

  let expectedBrowser = "Chrome";
  let actualBrowser = "Chrome";

  expect (expectedBrowser).toStrictEqual(actualBrowser);


});
