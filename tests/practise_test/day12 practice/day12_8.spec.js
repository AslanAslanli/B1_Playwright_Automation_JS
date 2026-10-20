// Questions:

// 1.  Does “Step 4 is executed” appear in the Terminal? -- no
// 2.  Does Playwright continue executing the remaining code after the hard assertion fails? -- no
// 3.  Does the test PASS or FAIL? -- fail

// Write your answers as comments.

import {test, expect} from "@playwright/test";

test("Hard Assertion Practice", async({page}) => {
  console.log("Step 1 is executed");

  let actualResult = 10;
  //expect (actualResult).toEqual(20);
  console.log("Step 4 is executed");

});