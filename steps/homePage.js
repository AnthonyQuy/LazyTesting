const { Given, When, Then } = require('cucumber');
const homePage = require('../pages/homePage');

Given(/^I have navigate to the google search page$/, function() {
  //Goto google page
  browser.url(homePage.url);
});

When(/^I search for \"([^\"]*)\"$/, function(searchString) {
  //Input value
  var input = browser.element(homePage.getSearchInput());
  input.setValue(searchString);
  //Hit enter
  browser.keys('\uE007');
  browser.pause(2000);
});

Then(/^I expect to see the search result \"([^\"]*)\"$/, function(
  expectResult
) {
  var searchResult;
  //Verify result exist
  try {
    searchResult = browser.element(
      homePage.getSearchResultLinkByLabel(expectResult)
    );
  } catch (err) {
    console.log('Expected:', searchResult);
    throw new Error(searchResult.message);
  }
});
