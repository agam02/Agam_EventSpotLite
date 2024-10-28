// src/components/EventCard.js

import React from "react";
import "./EventCard.css";

function EventCard({ event, openModal }) {
  return (
    <div className="event-card" onClick={() => openModal(event)}>
      {/* <img src={event.imageURL} alt={event.name} /> */}
      <div className="event-info">
        <h2>{event.name}</h2>
        <p>{event.date}</p>
        <p>{event.location}</p>
      </div>
    </div>
  );
}

export default EventCard;
