import Event from "../components/Event";
import { render } from "@testing-library/react";
import mockData from "../mock-data";
import userEvent from "@testing-library/user-event";

const mockEvent = mockData[0];

describe("<Event /> Component", () => {
  let EventComponent;
  beforeEach(() => {
    EventComponent = render(<Event event={mockEvent} />);
  });

  test("title is included", () => {
    const title = EventComponent.queryByText(mockEvent.summary);
    expect(title).toBeInTheDocument();
  });

  test("location is included", () => {
    const location = EventComponent.queryByText(mockEvent.location);
    expect(location).toBeInTheDocument();
  });
});
