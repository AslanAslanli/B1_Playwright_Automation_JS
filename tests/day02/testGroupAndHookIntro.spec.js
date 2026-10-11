import {test} from "@playwright/test";

test.describe("Login and validate header, middle, footer", {tag: "@EPIC-01"}, async() => {

test.beforeAll ("Before all", async({}) => {
    console.log("Turn computer on");
});

test.beforeEach ("Before each test", async({page}) => {
    console.log("Login into the page");
});

// test.only("Sample test - Verifying header of the page", {tag: ["@TC-01", "@smoke", "@regress"]}, async ({page}) => {
//     // console.log("Login into the page");
//     console.log("Test Case 01 running.......validation for header");
//     // console.log("Log out from page");
// });

test.skip("Sample test - Verifying middle part of the page", {tag: ["@TC-02", "@smoke", "@regress"]}, async ({page}) => {
    // console.log("Login into the page");
    console.log("Test Case 02 running.......validation for middle");
    // console.log("Log out from page");
});

// test.only("Sample test - Verifying footer of the page", {tag: ["@TC-03", "@smoke", "@regress"]}, async ({page}) => {
//     // console.log("Login into the page");
//     console.log("Test Case 03 running.......validation for footer");
//     // console.log("Log out from page");
// });

test.afterEach("After each", async({page}) => {
    console.log("Log out from page");
});

test.afterAll ("After all", async({}) => {
    console.log("Turn computer off");
});

});