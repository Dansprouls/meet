# RoundUp App (meet app)

## User Stories and Scenarios ( BDD Gherkin syntax )

### Feature 1: Filter events by city.

User Story:
As a user I should be able to “filter events by city” so that I can see the list of events that take place in that city

Scenarios:

Scenario 1: When user hasn't searched for a city, show upcoming events from all cities
GIVEN: user hasn’t searched for any city
WHEN: the user opens the app
THEN: the user should see a list of all upcoming events

Scenario 2: User should see a list of suggestions when they search for a city.
GIVEN: the main page is open
WHEN: user starts typing in the city textbox
THEN: the user should see a list of cities (suggestions) that match what they’ve typed

Scenario 3: User can select a city from the suggested list
GIVEN: the user was typing “Berlin” in the city textbox
And the list of suggested cities is showing
WHEN: the user selects a city (e.g., “Berlin, Germany”) from the list
THEN: their city should be changed to that city (i.e., “Berlin, Germany”)
And the user should receive a list of upcoming events in that city

### Feature 2: Show/Hide an event's details.

User Story:
As a user I should be able to toggle show/hide event details so that I can get additional details for events I am interested in and then hide those details if no longer needed.

Scenarios:

Scenario 1: An event element is collapsed by default
GIVEN: user get list of events in selected city
WHEN: the user selects a city
THEN: the user should see a all events in that city in a collapsed view (by default)

Scenario 2: User can expand an event to see its details
GIVEN: user selects an event
WHEN: the user clicks on the event/button
THEN: view expands and event details are revealed

Scenario 3: User can collapse an event to hide its details
GIVEN: user wants to close details for an event
WHEN: the user clicks on the event/button
THEN: event details are hidden/collapsed

### Feature 3: Specify number of events.

User Story: As a user I should be able to specify the number of events that I wish to be shown so that I can configure the number of results to my liking.

Scenarios:

Scenario 1: When user hasn’t specified a number, 32 is the default number
GIVEN: user has not selected a desired number of events
WHEN: the user selects a city
THEN: default number of events listed should be 32

Scenario 2: User can change the number of events they want to see
GIVEN: default number of events are shown after a city is selected
WHEN: the user wants to change the number of results displayed
THEN: use can select number of events to be displayed

### Feature 4: Use the app when offline.

User Story:
As a user I should be able to use the app while offline so that I can access details and event information when I do not have access to the internet.

Scenarios:

Scenario 1: Show cached data when there’s no internet connection
GIVEN: user does not have access to the internet
WHEN: user wants to see event information by city
THEN: Cached data should be available to be displayed and viewed by the user

Scenario 2: Show error when user changes the settings (city, time range)
GIVEN: user changes setting in the app
WHEN: when a setting is changed while offline
THEN: error message should be returned

### Feature 5: Data visualizations.

User Story:
As a user I should be able to view charts and graphs so that I can visually see the number of upcoming events by city.

Scenarios:

Scenario 1: Show a chart with the number of upcoming events in each city
GIVEN: the user hasn't selected a city to view events in yet
WHEN: user selects a city
THEN: chart adjusts to show number of events in the selected city.

## About RoundUp

This is a serverless, progressive web application, with React using a test-driven development (TDD) approach. The application uses the Google Calendar API to fetch upcoming events.

## How RoundUp uses serverless functions

An authorization server, which utilizes a serverless function ( AWS Lambda ), will be used to generate an authorization token for all authorized users. This will allow authenticated users to be able to access the CareerFoundry calendar event data in the Google Calendar API. The event data will then be able to be used in our app to display events by city and even show event data in chart format.
