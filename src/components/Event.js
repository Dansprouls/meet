// src/components/Event.js

import { useState } from "react";

const Event = ({ event }) => {
  const [showDetails, setShowDetails] = useState(false);
  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <li>
      <div className="event">
        <h3 className="event-title">{event.summary}</h3>
        <div className="location">Location: {event.location}</div>
        <div className="event-start">Event Start: {event.created}</div>
        {showDetails && (
          <div className="event-details">
            <div className="event-description">
              Description: {event.description}
            </div>
          </div>
        )}
        <button className="details-btn" onClick={toggleDetails}>
          {showDetails ? "Hide Details" : "Show Details"}
        </button>
      </div>
    </li>
  );
};

export default Event;
