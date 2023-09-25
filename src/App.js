// src/App.js

import CitySearch from "./components/CitySearch";
import EventList from "./components/EventList";
import "./App.css";
import { useState, useEffect } from "react";
import { extractLocations, getEvents } from "./api";

const App = () => {
  const [events, setEvents] = useState([]);
  const [allLocations, setAllLocations] = useState([]);
  const [currentNOE, setCurrentNOE] = useState(32);
  const [currentCity, setCurrentCity] = useState("See all cities");

  const fetchData = async () => {
    const allEvents = await getEvents();
    const filteredEvents =
      currentCity === "See all cities"
        ? allEvents
        : allEvents.filter((event) => event.location === currentCity);
    setEvents(filteredEvents.slice(0, currentNOE));
    setAllLocations(extractLocations(allEvents));
  };

  fetchData();
  /*useEffect(() => {
    fetchData();
  }, [currentCity, currentNOE]);*/

  return (
    <div className="App">
      <CitySearch allLocations={allLocations} />
      <EventList events={events} />
    </div>
  );
};

export default App;
