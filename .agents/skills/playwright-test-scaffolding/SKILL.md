---
name: playwright-test-scaffolding
description: Create empty Playwright JavaScript test skeletons from requirements, acceptance criteria, user stories, manual test cases, or test scenarios without implementing test steps. Use when the user asks to create, generate, scaffold, or prepare empty Playwright test cases or placeholder tests for future automation.
---

# Playwright Test Scaffolding

## Purpose

Create clean Playwright JavaScript test skeletons that represent test scenarios without implementing the automation steps.

Use provided:

- Test scenarios
- Requirements
- Acceptance criteria
- User stories
- Manual test cases
- Existing test plans

The generated tests should serve as placeholders for future implementation.

Follow all applicable project Playwright instructions and existing framework conventions.

## Workflow

### 1. Understand the Requested Scenarios

Identify the test cases that need Playwright skeletons.

Determine:

- Scenario title
- Scenario ID when provided
- Relevant grouping
- Existing tags when provided
- Existing file or suite structure
- Whether one or multiple tests are required

Do not invent additional scenarios unless explicitly requested.

### 2. Inspect Existing Test Structure

When project access is available, inspect relevant existing tests before generating the skeleton.

Look for:

- Test naming conventions
- `test.describe()` usage
- Tagging conventions
- File organization
- Imports
- Fixtures
- Existing test suites
- Existing test IDs
- Existing related skeletons or implemented tests

Follow the project's existing structure.

Do not duplicate existing tests.

### 3. Convert Each Scenario Into a Test

Create one Playwright `test()` for each requested scenario unless the existing project structure requires otherwise.

Example input:

```text
TS-001 | Valid login
TS-002 | Invalid login
TS-003 | Empty username
```

Example output:

```javascript
import { test } from '@playwright/test';

test('TS-001 - Valid login', async ({ page }) => {

});

test('TS-002 - Invalid login', async ({ page }) => {

});

test('TS-003 - Empty username', async ({ page }) => {

});
```

Do not implement the test steps.

### 4. Preserve Scenario IDs

When a scenario contains an ID such as:

```text
TS-001
TC-101
LOGIN-001
```

preserve the ID in the test title unless existing project conventions place IDs elsewhere.

Do not generate new IDs unless explicitly requested.

### 5. Create Meaningful Test Titles

Use the provided scenario title whenever possible.

Test titles should clearly communicate the behavior being tested.

Prefer:

```javascript
test('TS-001 - User can log in with valid credentials', async ({ page }) => {

});
```

Avoid vague titles such as:

```javascript
test('Login test', async ({ page }) => {

});
```

when a more specific provided scenario title is available.

### 6. Preserve Existing Tags

If tags are provided, preserve them using the project's existing tagging convention.

Example:

```javascript
test(
    'TS-001 - User can log in with valid credentials',
    { tag: '@smoke' },
    async ({ page }) => {

    }
);
```

For multiple tags:

```javascript
test(
    'TS-001 - User can log in with valid credentials',
    { tag: ['@smoke', '@regression'] },
    async ({ page }) => {

    }
);
```

Do not invent tags.

### 7. Use Existing Fixtures

If the project uses a custom Playwright fixture instead of the default:

```javascript
import { test } from '@playwright/test';
```

reuse the existing fixture import.

For example:

```javascript
import { test } from '../fixtures/testFixtures.js';
```

Do not introduce a new fixture system.

### 8. Use `test.describe()` When Appropriate

If the existing project groups related scenarios with `test.describe()`, follow that convention.

Example:

```javascript
import { test } from '@playwright/test';

test.describe('Login', () => {

    test('TS-001 - User can log in with valid credentials', async ({ page }) => {

    });

    test('TS-002 - User cannot log in with invalid credentials', async ({ page }) => {

    });

});
```

Do not add `test.describe()` unnecessarily when the project does not use it and grouping is not requested.

### 9. Do Not Implement Automation

A test skeleton must not contain:

- Navigation
- Locators
- Clicks
- Form input
- Assertions
- API calls
- Network mocks
- Authentication implementation
- Test data generation
- Business logic

Do not convert the skeleton into a completed automated test.

The body should remain empty unless the user explicitly requests placeholder comments.

### 10. Do Not Invent Application Information

Do not invent:

- URLs
- Locators
- Credentials
- Test data
- Expected results
- Page Objects
- API endpoints
- Application behavior
- Setup steps

The purpose of this skill is structure creation, not implementation.

### 11. Avoid Placeholder Implementation

Do not generate speculative placeholders such as:

```javascript
await page.goto('YOUR_URL');

await page.locator('YOUR_SELECTOR').click();

expect(true).toBeTruthy();
```

Do not use fake values simply to make the test appear implemented.

### 12. Avoid Unnecessary TODO Comments

By default, prefer an empty test body:

```javascript
test('TS-001 - Valid login', async ({ page }) => {

});
```

Do not automatically add:

```javascript
// TODO: Implement test
```

unless the user requests placeholder comments or the existing project convention requires them.

### 13. Avoid Unnecessary Imports

Import only what is required for the generated skeleton.

For an empty standard Playwright test:

```javascript
import { test } from '@playwright/test';
```

Do not import `expect` when the skeleton does not use it.

Do not import Page Objects, utilities, test data, or other dependencies that are not used.

### 14. Avoid Duplicate Tests

When project context is available, check whether the requested scenarios already exist.

Do not create duplicate skeletons for tests that already exist unless explicitly requested.

### 15. Preserve Requested Order

When multiple scenarios are provided, preserve their requested order unless the user explicitly asks for reorganization.

Do not reorder scenarios based on assumptions about priority.

### 16. Validate the Skeleton

Before completing the output, verify:

- Correct Playwright syntax
- Correct JavaScript syntax
- Correct import
- Correct test titles
- Scenario IDs preserved
- Tags preserved when provided
- Existing project conventions followed
- No duplicate scenarios
- No invented scenarios
- No implemented test steps
- No unnecessary imports
- No invented application information

## Quality Criteria

The generated test skeleton should be:

- Valid Playwright JavaScript
- Minimal
- Readable
- Consistent
- Ready for future implementation
- Consistent with existing project conventions
- Free from unnecessary imports
- Free from invented application details
- Limited to the requested scenarios

## Important Rules

- Follow applicable project Playwright instructions.
- Inspect existing test structure when available.
- Create only the requested test skeletons.
- Preserve provided scenario IDs.
- Preserve provided tags.
- Do not invent scenarios.
- Do not implement test steps.
- Do not invent URLs, locators, credentials, test data, or application behavior.
- Do not add unnecessary TODO comments.
- Do not add unused imports.
- Do not duplicate existing tests.
- Do not modify unrelated working code.
- Keep the generated skeleton as minimal as possible.

## Output Format

- Output only the requested Playwright test skeleton code.
- Do not include explanations, reasoning, summaries, alternatives, or additional commentary unless explicitly requested.
- Test bodies must remain empty unless the user explicitly requests placeholder comments.
- If updating an existing test file, output only the updated code.
- If essential scenario information is missing, output only a concise request for the specific information required.