// Questions:

// 1.  Does “Step 4 is executed” appear in the Terminal? -- yes
// 2.  Does Playwright continue after the failed soft assertion? -- yes
// 3.  Even though execution continues, does the overall test PASS or FAIL? -- fail
// 4.  What difference did you observe between the hard assertion and soft assertion? -- still fails, but just continues execution

// Write your answers as comments.

import {test, expect} from "@playwright/test";

test("Soft Assertion Practice", async ({page}) => {
  console.log("Step 1 is executed");
  let actualResult = 10;
  
  //expect.soft (actualResult).toEqual(20);
  console.log("Step 4 is executed");

  let browser = "Chrome";
  expect (browser).toEqual("Chrome");
});