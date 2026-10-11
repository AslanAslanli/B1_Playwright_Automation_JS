// Then add ONE intentionally incorrect assertion:
// 6.  Assert that totalStudents is equal to: 20

// Run the test.
// Observe the Playwright error.

// Question: What does Playwright show as the Expected value and the Received value? 
// expected 20 vs actual 15

// Write your answer as a comment.

import { test, expect } from "@playwright/test";

test("Value Assertion Failure Practice", async ({ page }) => {
  let expectedTitle = "Automation Testing";
  let actualTitle = "Automation Testing";
  let totalStudents = 15;
  let courseStarted = true;
  let topics = ["JavaScript", "Playwright", "API", "Database"];

  expect (expectedTitle).toStrictEqual(actualTitle);
  expect (totalStudents).toEqual(15);
  expect (courseStarted).toBeTruthy();
  expect (topics).toContain("Playwright");
  expect (topics).toContain("Database");

  // expect (totalStudents).toEqual(20);

});
