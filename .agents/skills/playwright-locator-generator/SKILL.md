---
name: playwright-locator-generator
description: Analyze application elements, DOM information, HTML, accessibility information, dynamic content, or existing automation code and generate reliable Playwright locator expressions using a user-selected locator strategy. Use when the user asks to create, generate, find, improve, replace, or troubleshoot a locator, selector, CSS selector, XPath, or Playwright locator.
---

# Playwright Locator Generation

## Purpose

Generate reliable, readable, maintainable, correct, unique, and stable Playwright locator expressions.

Use available:

- Live application/page information
- DOM
- HTML
- Accessibility information
- Application source code
- Page Objects
- Existing tests
- Screenshots
- Existing locators
- Project conventions

to determine how the intended UI element should be located.

Before generating the final locator, allow the user to select the desired locator strategy.

Supported strategies:

1. `getByRole`
2. `getByLabel`
3. `getByPlaceholder`
4. `getByText`
5. `getByTestId`
6. `locator()` using CSS
7. `locator()` using XPath
8. Best available locator

A locator is not considered reliable merely because it is syntactically valid or currently resolves to one element.

A reliable single-element locator should:

- Identify the intended UI element.
- Resolve to exactly one intended element when verification is possible.
- Use stable UI information.
- Remain reliable when unrelated application data changes.
- Remain reliable when unrelated page content or ordering changes.
- Follow the user's selected locator strategy.
- Follow project conventions.

Do not manufacture uniqueness by adding current test data.

Always output only the locator expression after a strategy has been selected and a reliable locator has been determined.

Do not generate methods, functions, classes, variable declarations, Page Object properties, assignments, test steps, or surrounding implementation unless explicitly requested.

Follow all applicable project Playwright instructions.

## Workflow

### 1. Understand the Locator Request

Determine:

- What UI element or elements the user wants to locate.
- The intended interaction.
- Whether the request targets one element or a collection.
- Whether the target belongs to a repeating component or dynamic collection.
- Whether the user already selected a locator strategy.
- Whether position is explicitly part of the requirement.
- Whether the user explicitly requested a data-driven locator.
- What DOM, HTML, accessibility, screenshot, application, Page Object, or test information is available.

Do not invent:

- DOM attributes
- Roles
- Accessible names
- Labels
- Placeholder values
- Text
- Test IDs
- IDs
- Application behavior
- Test data
- Element relationships

Do not assume that current text, title, ID, business value, or position represents stable UI identity.

### 2. Determine Single Element vs Collection

Determine whether the user wants one specific UI element or a collection.

#### Single Element

Examples:

```text
Locate the Login button.
Locate the Search input.
Locate this menu button.
Locate this specific UI control.
```

For a single-element request, the final locator should resolve to exactly one intended element when sufficient page or DOM context is available.

#### Collection

Examples:

```text
Locate all video titles.
Locate all search results.
Locate all rows.
Locate all product cards.
```

For a collection request, multiple matches are expected.

Do not artificially reduce a collection locator to one element.

Do not return a collection locator when the user requested one specific element.

### 3. Inspect Existing Project Code

When project code is available, inspect relevant files.

Look for:

- Existing Page Objects
- Existing locators
- Related tests
- Existing test IDs
- Existing locator conventions
- Reusable containers
- Existing patterns for lists, tables, cards, search results, and repeating components

Reuse an existing reliable locator strategy when appropriate.

Do not duplicate existing reliable locator strategies unnecessarily.

Even when an existing locator appears inside a method or Page Object property, output only the locator expression unless surrounding implementation is explicitly requested.

### 4. Analyze Stable UI Identity

Analyze the target using information that belongs to the UI structure or accessibility model.

Consider:

- Role
- Accessible name when stable
- Associated label
- Placeholder
- Test ID
- Stable ID
- Stable attributes
- Element type
- Stable parent/child relationships
- Stable containers
- Stable component structure
- Accessibility relationships
- Stable application-defined identifiers
- Current match count

Distinguish stable UI information from changing application or test data.

Do not assume an attribute is unique because it normally should be unique.

For example:

```html
id="video-title"
```

must not automatically be considered unique.

Actual uniqueness must be verified from the available page or DOM when possible.

### 5. Do Not Use Current Test Data to Manufacture Uniqueness

Do not make a locator unique by adding information that belongs to the current test execution or current application data rather than to the stable UI element structure.

Changing test/application data may include:

- Current search term
- Current search-result title
- Current video title
- Current video ID
- Current product name
- Current username
- Current customer name
- Current order number
- Current record value
- Current row text
- Current card text
- Dynamically generated content
- Data returned by the application
- Values that may be different during another execution

For example, if:

```xpath
//a[@id='video-title']
```

matches multiple video results, do NOT automatically refine it to:

```xpath
//a[@id='video-title' and @title='Minions - Funniest Scenes']
```

merely because the current video title is:

```text
Minions - Funniest Scenes
```

That creates uniqueness using current application data.

If another search returns a different title, the locator no longer represents the reusable UI element pattern.

Likewise, do not automatically use a current video ID:

```javascript
page.locator(`a#video-title[href*="v=${videoId}"]`)
```

unless the user explicitly requests a data-driven locator based on `videoId`.

Do not automatically replace current data with a variable merely to make the locator appear reusable.

For example, do not generate:

```javascript
page.getByRole('link', { name: videoTitle })
```

unless the user explicitly requests a locator that identifies the target by runtime video title.

A variable containing changing test data is still data-driven identity.

### 6. Ask for Locator Strategy

Before generating the final locator, ask:

```text
Which locator strategy do you want?

1. getByRole
2. getByLabel
3. getByPlaceholder
4. getByText
5. getByTestId
6. locator() - CSS
7. locator() - XPath
8. Best available locator
```

Wait for the user's selection.

Do not generate a candidate locator together with the question.

If the user already explicitly requested a strategy, skip this question.

If the user responds with a number from `1` through `8`, interpret it according to the displayed options.

### 7. Generate Using the Selected Strategy

Generate the locator using the selected strategy.

Do not silently switch to another strategy.

#### Option 1 — getByRole

Use:

```javascript
page.getByRole(...)
```

Use actual role information and stable accessible information.

Do not invent roles or accessible names.

#### Option 2 — getByLabel

Use:

```javascript
page.getByLabel(...)
```

Use only actual associated label information.

Do not invent labels.

#### Option 3 — getByPlaceholder

Use:

```javascript
page.getByPlaceholder(...)
```

Use only actual placeholder information.

Do not invent placeholder text.

#### Option 4 — getByText

Use:

```javascript
page.getByText(...)
```

Use actual visible text only when that text is a stable part of the UI element identity.

Do not use current changing application data merely to create uniqueness.

#### Option 5 — getByTestId

Use:

```javascript
page.getByTestId(...)
```

Use only an actual test ID available in the application.

Respect the project's configured test ID attribute.

Do not invent test IDs.

#### Option 6 — locator() Using CSS

Use:

```javascript
page.locator(...)
```

with CSS.

Prefer:

- Stable IDs
- Stable attributes
- Stable component structure
- Stable parent-child relationships
- Stable containers

Avoid:

- Long CSS chains
- Styling classes likely to change
- Current application data
- Incidental DOM structure
- Positional selectors unless position is part of the requirement

#### Option 7 — locator() Using XPath

Use:

```javascript
page.locator(...)
```

with relative XPath.

Prefer:

- Stable attributes
- Stable UI relationships
- Stable parent-child relationships
- Stable containers
- Stable component structure

Avoid:

- Absolute XPath
- Long DOM paths
- Current application data
- Unnecessary indexes
- Positional XPath unless position is part of the requirement

#### Option 8 — Best Available Locator

Choose the most reliable locator using actual stable application information.

General preference order:

1. `getByRole`
2. `getByLabel`
3. `getByPlaceholder`
4. `getByText`
5. `getByTestId`
6. CSS
7. XPath

This is a preference order, not an absolute rule.

Correctness, uniqueness, stability, and maintainability take priority.

Do not select a higher-priority strategy if it requires unstable changing data while another strategy provides stable UI identity.

### 8. Determine Semantic, Positional, or Data-Driven Identity

Determine how the target is expected to be selected.

#### Stable UI Identity

Use stable UI information when the target itself has a reliable distinguishing characteristic.

Example:

```javascript
page.getByTestId('login-button')
```

#### Positional Identity

Use position only when position itself is explicitly part of the requirement.

Examples:

```text
Click the second search result.
Select the first row.
Open the last item.
```

A positional locator may then be appropriate.

Example:

```javascript
page.locator('result-selector').nth(index)
```

Do not use position merely to reduce multiple matches to one.

#### Data-Driven Identity

A data-driven locator selects an element using runtime application/test data.

Examples:

```text
Locate video by videoTitle.
Locate user by username.
Locate product by productName.
Locate order by orderNumber.
```

Only generate this type of locator when the user explicitly requests data-driven identification.

Example:

```javascript
page.getByRole('link', { name: videoTitle, exact: true })
```

Do not automatically choose data-driven identity merely because stable UI identity is unavailable.

### 9. Handle Repeating and Dynamic Collections

Treat repeating UI components carefully.

Examples:

- Search results
- Video results
- Product results
- Tables
- Feeds
- Cards
- Recommendations
- Search suggestions
- Sorted lists
- Filtered lists

Separate:

```text
Collection identity
        ↓
Which UI elements belong to the repeating collection?

Target selection
        ↓
How should one member be chosen?
```

A structural locator such as:

```xpath
//a[@id='video-title']
```

may correctly identify the collection of video-title elements.

It does not automatically identify one specific video.

If the user wants one member of the repeating collection and stable UI structure cannot distinguish that member, do not manufacture uniqueness.

Determine whether the user wants:

1. The collection locator
2. A position-based locator
3. A data-driven locator

If this has not been specified, ask.

### 10. Ask How to Select a Repeating Member When Necessary

If all of the following are true:

- The user requested one element.
- The element belongs to a repeating collection.
- Stable UI information cannot uniquely distinguish the requested member.
- Position was not explicitly requested.
- Data-driven identification was not explicitly requested.

Do not manufacture a unique locator.

Ask only:

```text
This element is part of a repeating collection and has no stable unique UI identifier. How should it be selected?

1. By position
2. By runtime data
3. Return the collection locator
```

Wait for the user's selection.

If the user selects:

#### 1 — By position

Use position as part of the locator.

#### 2 — By runtime data

Use the runtime value specified by the user.

If the required runtime value has not been provided, ask only for that value or variable name.

#### 3 — Return the collection locator

Return the locator that identifies the intended collection.

Do not continue trying to manufacture single-element uniqueness.

### 11. Mandatory Match-Count Verification

For a single-element request, verify the final locator's actual match count whenever live application or sufficient full-DOM access is available.

Do not infer uniqueness from:

- Locator syntax
- `id`
- `name`
- `data-testid`
- `title`
- `aria-label`
- Any apparently unique attribute

Evaluate the complete candidate locator.

Use this process:

```text
Candidate locator
        ↓
Evaluate against page
        ↓
Match count?
        │
        ├── 0
        │    ↓
        │  Reject
        │
        ├── 1
        │    ↓
        │  Verify correct target
        │    ↓
        │  Verify stability
        │
        └── >1
             ↓
           Do not manufacture uniqueness
             ↓
           Refine using stable UI information
             ↓
           Evaluate again
```

Do not stop after finding a syntactically valid locator.

For a single-element request:

```text
0 matches = invalid
1 intended match = acceptable
More than 1 match = not yet a valid single-element locator
```

### 12. Refine Using Stable Information Only

When a single-element candidate matches multiple elements, first attempt to refine it using stable UI information.

Possible stable refinement information:

- Role
- Stable accessible name
- Label
- Placeholder
- Test ID
- Stable ID
- Stable attribute
- Stable container
- Stable parent-child relationship
- Stable component structure
- Accessibility relationship

Do not refine using changing test data unless data-driven selection was explicitly requested.

Do not refine using position unless positional selection was explicitly requested.

After every refinement, verify the complete locator again.

### 13. Verify Correctness

A locator returning exactly one element is not automatically correct.

Verify that the one matched element is the intended UI target.

The requirement is:

```text
Exactly 1 intended match
```

not merely:

```text
Exactly 1 match
```

### 14. Verify Stability

After uniqueness and correctness are established, evaluate stability.

Reject locators that unnecessarily depend on:

- Current search-result content
- Current business data
- Current list order
- Current search-result order
- Incidental DOM position
- Generated styling classes
- Fragile DOM chains
- Temporary attributes
- Current example values

A locator that works only for the current page data is not a stable reusable UI locator.

### 15. Do Not Use Position to Fake Uniqueness

This is not acceptable:

```text
Locator matches 20
        ↓
Use nth(1)
        ↓
Locator matches 1
        ↓
Return locator
```

unless position itself is explicitly part of the requirement.

Do not use:

```javascript
nth()
first()
last()
```

or positional XPath merely to force a single match.

### 16. Do Not Use Data to Fake Uniqueness

This is also not acceptable:

```text
Locator matches 20
        ↓
Read current title
        ↓
Add current title to locator
        ↓
Locator matches 1
        ↓
Return locator
```

unless the user explicitly requested data-driven identification.

For example:

```xpath
//a[@id='video-title']
```

matching multiple elements must not automatically become:

```xpath
//a[@id='video-title' and @title='Minions - Funniest Scenes']
```

Current result data must not be used merely to manufacture uniqueness.

### 17. Handle Unsupported Selected Strategy

If the selected locator strategy cannot reliably represent the requested target:

- Do not invent information.
- Do not silently change strategies.
- Do not use current data to force uniqueness.
- Do not use position to force uniqueness.
- Do not return an unreliable locator.

Output only:

```text
The selected locator strategy cannot reliably identify this element. Please select another locator strategy.
```

### 18. Respect Page Object Context

When Page Object code is available, inspect it to determine:

- Whether `page` or `this.page` should be used.
- Existing locator conventions.
- Existing containers.
- Existing patterns.

However, output only the locator expression.

Correct:

```javascript
this.page.getByRole('button', { name: 'Login' })
```

Do not output:

```javascript
this.loginButton = this.page.getByRole('button', { name: 'Login' });
```

Do not output:

```javascript
getLoginButton() {
    return this.page.getByRole('button', { name: 'Login' });
}
```

Do not output:

```javascript
const loginButton = this.page.getByRole('button', { name: 'Login' });
```

### 19. Handle Missing Verification Context

If sufficient page or DOM context is unavailable, do not claim that a single-element locator has been verified as unique.

Do not return an unverified locator as though it were verified.

Output only:

```text
Need surrounding DOM or page context to verify a reliable locator.
```

when additional context is required.

## Locator Evaluation

For a single-element request:

```text
1. Understand intended UI target
        ↓
2. Stable element or repeating collection?
        ↓
3. Ask locator strategy
        ↓
4. Generate candidate
        ↓
5. Uses changing test data?
        │
        ├── YES and not explicitly data-driven → Reject
        └── NO → Continue
        ↓
6. Uses position?
        │
        ├── YES and position not requested → Reject
        └── NO → Continue
        ↓
7. Check actual match count
        ↓
8. Exactly one intended match?
        │
        ├── YES → Verify stability → Return
        └── NO → Refine using stable UI information
                        ↓
              Cannot refine structurally?
                        ↓
              Ask collection / position / runtime data
```

## Quality Criteria

A generated single-element locator should be:

- Based on the selected strategy.
- Correct.
- Unique when verification is possible.
- Stable.
- Based on stable UI information by default.
- Independent of current test data by default.
- Independent of incidental position by default.
- Maintainable.
- Readable.
- Based on actual application information.

A collection locator should:

- Match the intended collection.
- Exclude unrelated elements when possible.
- Be stable.
- Not be artificially reduced to one element.

## Important Rules

- Ask for locator strategy unless already specified.
- Wait for the user's selection.
- Do not generate a candidate before strategy selection.
- Distinguish single-element requests from collection requests.
- Distinguish stable UI identity from changing test data.
- Do not use current test data merely to make a locator unique.
- Do not hard-code current video titles, search-result titles, video IDs, product names, usernames, order numbers, row values, or other changing application data unless explicitly requested.
- Do not automatically replace changing current data with a variable.
- A variable containing changing test data is still data-driven identification.
- Use data-driven identification only when explicitly requested.
- Do not assume `id` means unique.
- Do not infer uniqueness from locator syntax.
- Verify actual match count when possible.
- Zero matches is invalid for a requested single element.
- More than one match is invalid for a requested single element unless further target-selection behavior is required.
- One match must still be verified as the correct target.
- Recheck after every refinement.
- Do not use `nth()`, `first()`, `last()`, indexes, or positional XPath merely to force uniqueness.
- Use position only when position itself is explicitly requested.
- If a repeating member cannot be structurally distinguished, ask whether selection should be by position, runtime data, or collection.
- Do not silently switch locator strategies.
- Do not invent DOM information.
- Do not generate methods or functions.
- Do not generate variable declarations.
- Do not generate Page Object properties.
- Do not generate assignments.
- Do not generate test steps.
- Do not include `return`.
- Output only the locator expression after successful generation.
- Output the locator inside a JavaScript code block.

## Output Format

Before a locator strategy has been selected, output only:

```text
Which locator strategy do you want?

1. getByRole
2. getByLabel
3. getByPlaceholder
4. getByText
5. getByTestId
6. locator() - CSS
7. locator() - XPath
8. Best available locator
```

If the requested element is part of a repeating collection and stable UI information cannot uniquely distinguish one member, output only:

```text
This element is part of a repeating collection and has no stable unique UI identifier. How should it be selected?

1. By position
2. By runtime data
3. Return the collection locator
```

After all required selections have been made, output only the Playwright locator expression inside a JavaScript code block.

Example:

```javascript
page.getByRole('button', { name: 'Login' })
```

Example CSS:

```javascript
page.locator('[data-testid="login-button"]')
```

Example XPath:

```javascript
page.locator("//button[@type='submit']")
```

The JavaScript code block must contain only the locator expression so it can be inserted directly into the editor at the cursor position.

Do not place explanatory text before or after the code block.

Do not output:

- Methods
- Functions
- Classes
- Variables
- Assignments
- Page Object properties
- Test steps
- `return`
- Comments
- Explanations
- Alternatives
- Summaries

If the selected strategy cannot reliably identify the target, output only:

```text
The selected locator strategy cannot reliably identify this element. Please select another locator strategy.
```

If application or DOM context is insufficient, output only:

```text
Need surrounding DOM or page context to verify a reliable locator.
```

If the intended target itself is unclear, output only a concise request for the specific information needed.