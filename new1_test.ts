Feature('Filter results');

import * as cons from './cons'

Scenario('login LIS', ({ I }) => {
I.amOnPage(`/sign-in`);
I.waitForVisible("//button[contains(text(),'Continue')]", cons.wait);
I.fillField("//input[@name='login']", cons.email);
I.click("//button[contains(text(),'Continue')]");
I.waitForVisible("//button[contains(text(),'Continue')]", cons.wait);
I.waitForVisible("//input[@name='password']");
I.fillField("//input[@name='password']", cons.password);
I.click("//button[contains(text(),'Continue')]");
I.waitForText("Results", cons.wait);
});

Scenario('Apply filter', ({ I }) => {
I.amOnPage(`/sign-in`);
I.waitForVisible("//button[contains(text(),'Continue')]", cons.wait);
I.fillField("//input[@name='login']", cons.email);
I.click("//button[contains(text(),'Continue')]");
I.waitForVisible("//button[contains(text(),'Continue')]", cons.wait);
I.waitForVisible("//input[@name='password']",cons.wait);
I.fillField("//input[@name='password']", cons.password);
I.click("//button[contains(text(),'Continue')]");
I.waitForVisible("//a[@href='/results']", cons.wait);
I.click("//a[@href='/results']");
I.waitForText("Results", cons.wait);
I.click("//button[contains(text(),'Filters')]");
I.waitForVisible("//span[@id='status-label']");
I.fillField("//input[@id='status-input']",'Final');
I.click("//span[contains(text(),'Final')]"),cons.wait;
I.waitForVisible("//div[contains(text(),'Status: Final')]", cons.wait);
});

Scenario('Search and clear', ({ I }) => {
I.amOnPage(`/sign-in`);
I.waitForVisible("//button[contains(text(),'Continue')]", cons.wait);
I.fillField("//input[@name='login']", cons.email);
I.click("//button[contains(text(),'Continue')]");
I.waitForVisible("//button[contains(text(),'Continue')]", cons.wait);
I.waitForVisible("//input[@name='password']",cons.wait);
I.fillField("//input[@name='password']", cons.password);
I.click("//button[contains(text(),'Continue')]");
I.waitForVisible("//a[@href='/results']", cons.wait);
I.click("//a[@href='/results']");
I.waitForText("Results", cons.wait);
I.click("//header/div/div[1]/div/form");
I.fillField("//input[@placeholder='Search for Orders']", 'no_search_results_text');
I.pressKey('Enter');
I.waitForText("No results", cons.wait);
I.click("//header/div/div[1]/div/div[2]");
I.waitNumberOfVisibleElements("//div[@tabindex='-1']",25,cons.wait);
});

Scenario('Check profile', ({ I }) => {
I.amOnPage(`/sign-in`);
I.waitForVisible("//button[contains(text(),'Continue')]", cons.wait);
I.fillField("//input[@name='login']", cons.email);
I.click("//button[contains(text(),'Continue')]");
I.waitForVisible("//button[contains(text(),'Continue')]", cons.wait);
I.waitForVisible("//input[@name='password']",cons.wait);
I.fillField("//input[@name='password']", cons.password);
I.click("//button[contains(text(),'Continue')]");
I.waitForVisible("//a[@href='/results']", cons.wait);
I.click("//a[@href='/results']");
I.waitForText("Results", cons.wait);
I.click("//div[@data-tid='userHeaderMenu']");
I.click("//span[contains(text(),'Profile')]");
I.waitForVisible("//span[contains(text(),'Profile')]",cons.wait); //title
I.waitForVisible("//div[contains(text(),'Y1')]",cons.wait);
I.waitForVisible("//div[contains(text(),'y1@fl.com')]");
I.waitForVisible("//div/span[contains(text(),'+1 111 111 9999')]");
});

Scenario('Check links', ({ I }) => {
I.amOnPage(`/sign-in`);
I.waitForVisible("//button[contains(text(),'Continue')]", cons.wait);
I.fillField("//input[@name='login']", cons.email);
I.click("//button[contains(text(),'Continue')]");
I.waitForVisible("//button[contains(text(),'Continue')]", cons.wait);
I.waitForVisible("//input[@name='password']",cons.wait);
I.fillField("//input[@name='password']", cons.password);
I.click("//button[contains(text(),'Continue')]");
I.waitForVisible("//a[@href='/results']", cons.wait);
I.click("//a[@href='/results']");
I.waitForText("Results", cons.wait);
I.click("//div[@data-tid='userHeaderMenu']");
I.click("//span[contains(text(),'Legal')]");
I.waitForVisible("//div/div/div[contains(text(),'Privacy Policy')]",cons.wait);
I.waitForClickable("//div[normalize-space()='Privacy Policy']");
I.waitForClickable("//div[normalize-space()='Terms of Service']");
I.waitForClickable("//div[normalize-space()='Notice of Privacy Practices']");
I.waitForClickable("//div[normalize-space()='Healthcare Provider User Agreement']");
I.waitForClickable("//div[normalize-space()='Electronic Signature Terms']");
I.waitForClickable("//div[normalize-space()='SMS Terms of Service']");
});