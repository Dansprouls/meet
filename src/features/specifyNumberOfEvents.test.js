import { loadFeature, defineFeature } from "jest-cucumber";
import { render, within, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "../App";

const feature = loadFeature("./src/features/specifyNumberOfEvents.feature");

defineFeature(feature, (test) => {
  test("When user hasn't specified a number, 32 is the default number", ({
    given,
    when,
    then,
  }) => {
    let AppComponent;
    let eventList;
    given("user has not selected a desired number of events", () => {
      AppComponent = render(<App />);
    });

    when("the list is loaded", async () => {
      const AppDOM = AppComponent.container.firstChild;
      await waitFor(() => {
        eventList = within(AppDOM).queryAllByRole("listitem");
        expect(eventList[0]).toBeTruthy();
      });
    });

    then(/^the default number of events listed should be (\d+)$/, (arg0) => {
      expect(eventList.length).toEqual(32);
    });
  });

  test("User can change the number of events they want to see.", ({
    given,
    when,
    then,
  }) => {
    let AppComponent;
    given("events are displayed on the screen", async () => {
      AppComponent = render(<App />);
      const AppDOM = AppComponent.container.firstChild;
      await waitFor(() => {
        const eventList = within(AppDOM).queryAllByRole("listitem");
        expect(eventList[0]).toBeTruthy();
      });
    });

    when(
      "the user wants to change the number of results displayed",
      async () => {
        const input = AppComponent.queryByTestId("numberOfEventsInput");

        await userEvent.type(input, "{backspace}{backspace}10");
      }
    );

    then(
      "the number of events will reflect the number the user selected",
      () => {
        const AppDOM = AppComponent.container.firstChild;
        const eventList = within(AppDOM).queryAllByRole("listitem");
        expect(eventList.length).toEqual(10);
      }
    );
  });
});
