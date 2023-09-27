Feature: Show/hide events details
  Scenario: An event element is collapsed by default.
    Given user opens application
    When the user is returned the full list of events
    Then by default all events will be collapsed

  Scenario: User can click show details button to expand event details
    Given the user gets a list of events
    When a user clicks on the show details button
    Then the details for that event will expand

  Scenario: User can click hide details to collapse an event to hide the details
    Given details of an event are expanded
    When the user clicks the hide details button
    Then the event details will collapse