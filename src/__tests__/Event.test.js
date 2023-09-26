import Event from "../components/Event";
import { render } from "@testing-library/react";
import mockData from "../mock-data";
import userEvent from "@testing-library/user-event";
import { getEvents } from "../api";

const mockEvent = mockData[0];

describe("<Event /> Component", () => {
  let EventComponent;
  beforeEach(() => {
    EventComponent = render(<Event event={mockEvent} />);
  });

  /*test("title is included", () => {
    const title = EventComponent.queryByText(mockEvent.summary);
    expect(title).toBeInTheDocument();
  });

  test("location is included", () => {
    const location = EventComponent.queryByText(mockEvent.location);
    expect(location).toBeInTheDocument();
  });*/

  test("title is included", () => {
    expect(EventComponent.queryByText(mockEvent.summary)).toBeInTheDocument();
  });

  test("location is included", () => {
    expect(
      EventComponent.queryByText(`Location: ${mockEvent.location}`)
    ).toBeInTheDocument();
  });

  test("event time is included", () => {
    expect(
      EventComponent.queryByText(`Event Start: ${mockEvent.created}`)
    ).toBeInTheDocument();
  });

  test("show details button is included", () => {
    expect(EventComponent.queryByText("Show Details")).toBeInTheDocument();
  });

  test("by default event details are hidden", () => {
    const eventDOM = EventComponent.container.firstChild;
    const details = eventDOM.querySelector(".event-details");
    expect(details).not.toBeInTheDocument();
  });

  test('show details after user clicks button "show details"', async () => {
    const user = userEvent.setup();
    const detailsBtn = EventComponent.queryByText("Show Details");
    await user.click(detailsBtn);

    const eventDOM = EventComponent.container.firstChild;
    const eventDetails = eventDOM.querySelector(".event-details");
    expect(eventDetails).toBeInTheDocument();
  });

  test('hide details after user clicks button "hide details"', async () => {
    const detailsBtn = EventComponent.queryByText("Show Details");
    const eventDOM = EventComponent.container.firstChild;
    await userEvent.click(detailsBtn);

    const hideButton = EventComponent.queryByText("Hide Details");
    await userEvent.click(hideButton);

    const eventDetails = eventDOM.querySelector(".event-details");
    expect(eventDetails).not.toBeInTheDocument();
  });
});
