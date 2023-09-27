import { loadFeature, defineFeature } from "jest-cucumber";
import { render, within, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "../App";

const feature = loadFeature("./src/features/showHideAnEventsDetails.feature");

defineFeature(feature, (test) => {
  test("An event element is collapsed by default.", ({ given, when, then }) => {
    let AppComponent;
    given("user opens application", () => {
      AppComponent = render(<App />);
    });

    when("the user is returned the full list of events", async () => {
      const AppDOM = AppComponent.container.firstChild;
      const EventListDOM = AppDOM.querySelector("#event-list");

      await waitFor(() => {
        const EventListItems = within(EventListDOM).queryAllByRole("listitem");
        expect(EventListItems.length).toBe(32);
      });
    });

    then("by default all events will be collapsed", () => {
      const EventDOM = AppComponent.container.firstChild;
      const eventDetails = EventDOM.querySelector(".event-details");
      expect(eventDetails).not.toBeInTheDocument();
    });
  });

  test("User can click show details button to expand event details", ({
    given,
    when,
    then,
  }) => {
    let AppComponent;
    given("the user gets a list of events", async () => {
      AppComponent = render(<App />);
      const AppDOM = AppComponent.container.firstChild;

      await waitFor(() => {
        const eventList = within(AppDOM).queryAllByRole("listitem");
        expect(eventList[0]).toBeTruthy();
      });
    });

    when("a user clicks on the show details button", async () => {
      const detailsButton = AppComponent.queryAllByText("Show Details")[0];

      await userEvent.click(detailsButton);
    });

    then("the details for that event will expand", () => {
      const EventDOM = AppComponent.container.firstChild;
      const eventDetails = EventDOM.querySelector(".event-details");
      expect(eventDetails).toBeInTheDocument();
    });
  });

  test("User can click hide details to collapse an event to hide the details", ({
    given,
    when,
    then,
  }) => {
    let AppComponent;
    let detailsButton;
    given("details of an event are expanded", async () => {
      AppComponent = render(<App />);
      const AppDOM = AppComponent.container.firstChild;

      await waitFor(() => {
        const eventList = within(AppDOM).queryAllByRole("listitem");
        expect(eventList[0]).toBeTruthy();
      });

      detailsButton = AppComponent.queryAllByText("Show Details")[0];
      await userEvent.click(detailsButton);

      const EventDOM = AppComponent.container.firstChild;
      const eventDetails = EventDOM.querySelector(".event-details");
      expect(eventDetails).toBeInTheDocument();
    });

    when("the user clicks the hide details button", async () => {
      await userEvent.click(detailsButton);
    });

    then("the event details will collapse", () => {
      const EventDOM = AppComponent.container.firstChild;
      const eventDetails = EventDOM.querySelector(".event-details");
      expect(eventDetails).not.toBeInTheDocument();
    });
  });
});
