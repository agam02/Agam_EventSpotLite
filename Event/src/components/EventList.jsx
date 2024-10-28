// src/components/EventList.js

import React from "react";
import EventCard from "./EventCard";
import "./EventList.css";

function EventList({ events, openModal }) {
  return (
    <div className="event-list">
      {events.map((event) => (
        <EventCard key={event.id} event={event} openModal={openModal} />
      ))}
    </div>
  );
}

export default EventList;
