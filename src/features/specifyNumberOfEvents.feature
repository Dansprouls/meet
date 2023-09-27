Feature: Specify number of events
  Scenario: When user hasn't specified a number, 32 is the default number
    Given user has not selected a desired number of events
    When the list is loaded
    Then the default number of events listed should be 32

  Scenario: User can change the number of events they want to see.
    Given events are displayed on the screen
    When the user wants to change the number of results displayed
    Then the number of events will reflect the number the user selected