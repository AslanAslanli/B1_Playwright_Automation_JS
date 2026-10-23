import {test, expect, chromium} from "@playwright/test";

test("Multiple browsers test - Chorme and Edge", async() => {

  const chromeBrowser = await chromium.launch({channel: "chrome", headless: false});
  const chromeContext = await chromeBrowser.newContext();
  const chromePage = await browser1.newPage();

  const edgeBrowser = await chromium.launch({channel: "msedge", headless: false});
  const edgeContext = await edgeBrowser.newContext();
  const edgePage = await browser2.newPage();

  await chromePage.goto("https://www.google.com/");
  await edgePage.goto("https://ticket.ady.az/");

  await chromePage.bringToFront();
  await edgePage.bringToFront();

  await chromeContext.close();
  await edgeContext.close(); 

  await chromeBrowser.close();
  await edgeBrowser.close(); 

});