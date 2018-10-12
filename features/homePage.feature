Feature: GoogleSearch
    As a user
    I want to search google

    Scenario: WebdrvierIO Search Results
        When I have navigate to the google search page
        And I search for "webdriverio"
        Then I expect to see the search result "WebdriverIO - WebDriver bindings for Node.js"
