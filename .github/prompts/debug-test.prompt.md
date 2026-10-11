---
name: debug-test
description: Diagnose and fix a failing, flaky, or unexpected Playwright JavaScript automated test.
---

Diagnose and fix the Playwright JavaScript test failure I provide.

Use the **playwright-test-debugging** skill for the debugging workflow.

Follow the applicable project Playwright instructions and existing framework conventions.

Determine the root cause before modifying the code and make only the smallest reliable change necessary.

Inspect relevant tests, Page Objects, fixtures, utilities, test data, configuration, errors, and available debugging information when needed.

Do not hide failures using arbitrary waits, unnecessary timeout increases, weakened assertions, retries, or unrelated code changes.

Output only the code changes required to fix the test. Do not include explanations, reasoning, summaries, alternatives, or additional commentary unless I explicitly request them.

If the available information is insufficient to determine the root cause, output only a concise request for the specific information needed.

Ask me to provide the failing test, error, or relevant debugging information if I have not provided it.