// src/App.js

import React, { useState } from "react";
import EventList from "./components/EventList";
import SearchBar from "./components/SearchBar";
import EventModal from "./components/EventModal";
import eventsData from "./data/events";
import "./App.css";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedEvent, setSelectedEvent] = useState(null);

  const filteredEvents = eventsData.filter(
    (event) =>
      event.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      event.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const openModal = (event) => setSelectedEvent(event);
  const closeModal = () => setSelectedEvent(null);

  return (
    <div className="app">
      <h1>EventSpot</h1>
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <EventList events={filteredEvents} openModal={openModal} />
      {selectedEvent && <EventModal event={selectedEvent} closeModal={closeModal} />}
    </div>
  );
}

export default App;
