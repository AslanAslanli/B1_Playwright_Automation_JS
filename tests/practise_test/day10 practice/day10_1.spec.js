import {test, expect} from "@playwright/test";

test.describe("Day 10 Homework", {tag: "@BAAA-10"} ,() => {

    // Practice #1 - Add Tags to Tests
    test.describe("Practise #1", {tag: "@day10_prac_01"} , () => {
        
        test("Google Search", {tag: "@smoke"}, async({page}) => {            
            await page.goto("https://www.google.com");

            let searchBox = page.locator("//textarea[@aria-label='Axtarış']");
            await searchBox.fill("Playwright Automation");
            await searchBox.press("Enter");
            // await page.waitForTimeout(20000);
            // await expect(page.getByRole("link", {name: /Playwright/}).first()).toBeVisible();

        });

        test("Playwright Website", {tag: "@regression"}, async({page}) => {
            await page.goto("https://playwright.dev");
            const getStartedButton = page.locator("//a[.='Get started']");
            await getStartedButton.click();
        })

        test("SauceDeme Login", {tag: "@smoke"}, async({page}) => {
            await page.goto("https://www.saucedemo.com");

            const sourceDemoUsername = page.locator("#user-name");
            const sourceDemoPassword = page.locator("#password");
            const sourceDemoLoginButton = page.locator("#login-button");

            await sourceDemoUsername.fill("standard_user");
            await sourceDemoPassword.fill("secret_sauce");
            await sourceDemoLoginButton.click();
            // await page.waitForTimeout(2000);
        });

        // Test 4 - “Hover Practice” - Tag: @regression - Navigate to
        // https://the-internet.herokuapp.com/hovers - Hover over one user image.
        test("Hover Practise", {tag: "@regression"}, async({page}) => {
            await page.goto("https://the-internet.herokuapp.com/hovers ");
            const userOneImage = page.locator("//h5[.='name: user1']/../preceding-sibling::img");

            await userOneImage.hover();
            const userOneText = page.locator("//h5[.='name: user1']");
            // await page.waitForTimeout(2000);
            await expect (userOneText).toBeVisible();
        });

        // After creating the tests: 
        // 1. Run ALL tests. ----> npx playwright test
        // 2. Run ONLY @smoke tests. ---->  npx playwright test --grep "@smoke"
        // 3. Run ONLY @regression tests.  ----> npx playwright test --grep "@regression"
        // 4. Write the commands you used as comments.
        // npx playwright test

        // every smoke in Project: PS C:\Users\aslan\OneDrive\Desktop\VSCProjects\B1_Playwright_Automation_JS> 
        // npx playwright test --grep "@smoke"

        // limiting a tag to a specific test file
        // npx playwright test "day10_1.spec.js" --grep "@smoke"

        // this will make sure that your run is in headed mode!
        // npx playwright test --grep "@smoke" --headed

        // this will also make sure your command is deafaulted to config file regardless of folder dir
        // npx playwright test --grep "@smoke" --config=playwright.config.js


        //PS C:\Users\aslan\OneDrive\Desktop\VSCProjects\B1_Playwright_Automation_JS\day03> 

        // npx playwright test --grep "@regression"
        // npx playwright test --grep "@smoke|@regression"

    });

//     Practice #2 - Multiple Tags
    test.describe("Practice #2", () => {
        test("Prac2_Test_#1", {tag: "@smoke"}, async({page}) => {
            console.log("Simple test 1");
        });

        test("Prac2_Test_#2", {tag: "@regression"}, async({page}) => {
            console.log("Simple test 2");
        });

        test("Prac2_Test_#3", {tag: ["@smoke", "@regression"]}, async({page}) => {
            console.log("Simple test 3");
        });

        test("Prac2_Test_#4", {tag: "@sanity"} , async({page}) => {
            console.log("Simple test 4");
        });

        // npx playwright test --grep "@smoke"
        // npx playwright test --grep "@regression"
        // npx playwright test --grep "@sanity"
        // npx playwright test --grep "@smoke.*@regression|@regression.*@smoke" --> This will run tests with both smoke and regression tags
        // npx playwright test --grep "Practice #2.*@smoke"                     --> This will run tests with smoke tag only in "Practice #2" group
    });
    
// Practice #3 - Group Tests with test.describe()
    test.describe("Practice #3 - Search Engine Tests", () => {
        test("Google Search", async({page}) => {
            await page.goto("https://www.google.com");

            let searchBox = page.locator("//textarea[@aria-label='Axtarış']");
            await searchBox.fill("Playwright Automation");
            await searchBox.press("Enter");
        });

        test("Bing Search", async({page}) => {
            await page.goto("https://www.bing.com/");
            const searchBox = page.locator("//textarea[@id='sb_form_q']");

            await searchBox.fill("“JavaScript”");
            await searchBox.press("Enter");
            await page.waitForTimeout(2000);
        });

        test("DuckDuckGo Search", async({page}) => {
            await page.goto("https://duckduckgo.com/");
            const searchBox = page.locator("//textarea[@placeholder='Search privately']");

            await searchBox.fill("Automation Testing");
            await page.waitForTimeout(2000);
        });
    });

// Practice #4 - beforeEach and afterEach
    test.describe("Practise #4 - SauceDemo Tests", () => {

        test.beforeEach("Before each test", async({page}) => {
            console.log("BeforeEach function is executed");
            await page.goto("https://www.saucedemo.com");

            const usernameField = page.locator("//input[@id='user-name']");
            const passwordFeild = page.locator("//input[@id='password']");
            const loginButton = page.locator("//input[@id='login-button']");

            await usernameField.fill("standard_user");
            await passwordFeild.fill("secret_sauce");
            await loginButton.click();
            await page.waitForTimeout(1000);
        });

        test("Product 1", async({page}) => {
            const product1 = page.locator("//div[normalize-space()='Sauce Labs Backpack']");
            await product1.click();
            await page.waitForTimeout(1000);
        });

        
        test("Product 2", async({page}) => {
            const product2 = page.locator("//div[normalize-space()='Sauce Labs Bike Light']");
            await product2.click();
            await page.waitForTimeout(1000);
        });

        test("Product 3 - Shopping Cart", async({page}) => {
            const shoppingCart = page.locator("//a[@aria-label='Cart, empty']");
            await shoppingCart.click();
            await page.waitForTimeout(1000);
        });

        test.afterEach("After each test", async({page}) => {
            console.log("AfterEach function is executed");
        });
    });

//     Practice #5 - beforeAll and afterAll
    test.describe("Practise #5 - Hook Practice", () => {
        test.beforeAll("BeforeAll executing", () => {
            console.log("BeforeAll function is executed");
        });

        test("Test Case 01", async({page}) => {
            console.log("Test Case 01 is executed");
        });

        test("Test Case 02", async({page}) => {
            console.log("Test Case 02 is executed");
        });

        test("Test Case 03", async({page}) => {
            console.log("Test Case 03 is executed");
        });
        
        test.afterAll("AfterAll executing", () => {
            console.log("AfterAll function is executed");
        });
    });

// Practice #6 - Use All Four Hooks
    test.describe("Practise #6 - All Hooks Practice", () => {
        test.beforeAll("BeforeAll", () => {
            console.log("BeforeAll is executed");
        });

        test.beforeEach("Before each", () => {
            console.log("Before each is executed");
        });

        test("Test 01", async({page}) => {
            console.log("Test 01 is executed");
        });

        test("Test 02", async({page}) => {
            console.log("Test 02 is executed");
        });

        test("Test 03", async({page}) => {
            console.log("Test 03 is executed");
        });

        test.afterEach("After each", () => {
            console.log("After each is executed");
        });

        test.afterAll("AfterAll", () => {
            console.log("AfterAll is executed");
        });
    });

// Practice #7 - Predict the Execution Order

// Create test.describe(“Execution Order Practice”) with: - beforeAll -
// afterAll - beforeEach - afterEach - Test Case 01 - Test Case 02

// Each hook and test must print its name.

// DO NOT run it at first.

// Write the order you EXPECT: 
// 1. _____BeforeAll is executed_________________ 
// 2. _____BefEach + Test 01 + AFterEach_________________ 
// 3. _____BefEach + Test 02 + AFterEach_________________ 
// 4. _____BefEach + Test 03 + AFterEach_________________  
// 5. _____AfterAll is executed_________________

// Then run it and compare your prediction with the Terminal output.
    test.describe("Practise #7 - Execution Order Practice", () => {
        test.beforeAll("BeforeAll", () => {
            console.log("BeforeAll is executed");
        });

        test.beforeEach("Before each", () => {
            console.log("Before each is executed");
        });

        test("Test 01", async({page}) => {
            console.log("Test 01 is executed");
        });

        test("Test 02", async({page}) => {
            console.log("Test 02 is executed");
        });

        test("Test 03", async({page}) => {
            console.log("Test 03 is executed");
        });

        test.afterEach("After each", () => {
            console.log("After each is executed");
        });

        test.afterAll("AfterAll", () => {
            console.log("AfterAll is executed");
        });
    });

// Practice #8 - Combine Groups, Hooks, and Tags

// Run: 1. All tests. 2. Only @smoke. 3. Only @regression.

// QUESTIONS: 
// 1. When only @smoke runs, does beforeEach run for @regression tests? -- No
// 2. How many times does beforeEach run for @smoke? -- 2
// 3. How many times does beforeAll run? -- 1
// 4. How many times does afterAll run? -- 1
    test.describe("Practise #8 - Regression Practice", () => {
        test.beforeAll("BeforeAll", () => {
            console.log("BeforeAll is executed");
        });

        test.beforeEach("Before each", () => {
            console.log("Before each is executed");
        });

        test("Test 01 - Google Search", {tag: "@smoke"}, async({page}) => {
            await page.goto("https://www.google.com");

            let searchBox = page.locator("//textarea[@aria-label='Axtarış']");
            await searchBox.fill("Playwright Automation");
            await searchBox.press("Enter");
        });

        test("Test 02 - Playwright Website", {tag: "@regression"}, async({page}) => {
            await page.goto("https://playwright.dev");
            const getStartedButton = page.locator("//a[.='Get started']");
            await getStartedButton.click();
        })

        test("Test 03 - SauceDemo Login", {tag: "@smoke"}, async({page}) => {
            await page.goto("https://www.saucedemo.com");

            const usernameField = page.locator("//input[@id='user-name']");
            const passwordFeild = page.locator("//input[@id='password']");
            const loginButton = page.locator("//input[@id='login-button']");

            await usernameField.fill("standard_user");
            await passwordFeild.fill("secret_sauce");
            await loginButton.click();
            // await page.waitForTimeout(1000);
        });

        test("Test 04 - Hover Test", {tag: "@regression"}, async({page}) => {
            await page.goto("https://the-internet.herokuapp.com/hovers ");
            const userOneImage = page.locator("//h5[.='name: user1']/../preceding-sibling::img");

            await userOneImage.hover();
            const userOneText = page.locator("//h5[.='name: user1']");
            // await page.waitForTimeout(2000);
            await expect (userOneText).toBeVisible();
        });

        test.afterEach("After each", () => {
            console.log("After each is executed");
        });

        test.afterAll("AfterAll", () => {
            console.log("AfterAll is executed");
        });
    });

// BONUS - Two Groups with Different Tags
   test.describe("Practise #Bonus-Group 2 - Login tests", () => {
        test.beforeAll("Login Tests - BeforeAll", () => {
            console.log("Login Tests - BeforeAll is executed");
        });

        test.beforeEach("Login Tests - Before each", () => {
            console.log("Login Tests - Before each is executed");
        });

        test("Test 01", {tag: "@smoke"}, async({page}) => {
            console.log("Group 1 - Test 1 - smoke");
        });

        test("Test 02", {tag: "@smoke"}, async({page}) => {
           console.log("Group 1 - Test 2 - smoke");
        })

        test.afterEach("Login Tests - After each", () => {
            console.log("Login Tests - After each is executed");
        });

        test.afterAll("Login Tests - AfterAll", () => {
            console.log("Login Tests - AfterAll is executed");
        });
    });

    test.describe("Practise #Bonus-Group 2 - Navigation tests", () => {
        test.beforeAll("Navigation Tests - BeforeAll", () => {
            console.log("Navigation Tests - BeforeAll is executed");
        });

        test.beforeEach("Navigation Tests - Before each", () => {
            console.log("Navigation Tests - Before each is executed");
        });

        test("Test 01", {tag: "@regression"}, async({page}) => {
            console.log("Group 2 - Test 1 - regression");
        });

        test("Test 02", {tag: "@regression"}, async({page}) => {
           console.log("Group 2 - Test 2 - regression");
        })

        test.afterEach("Navigation Tests - After each", () => {
            console.log("Navigation Tests - After each is executed");
        });

        test.afterAll("Navigation Tests - AfterAll", () => {
            console.log("Navigation Tests - AfterAll is executed");
        });
    });


});
