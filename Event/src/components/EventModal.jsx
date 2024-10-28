// src/components/EventModal.js

import React from "react";
import "./EventModal.css";

function EventModal({ event, closeModal }) {
  return (
    <div className="modal-overlay" onClick={closeModal}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <span className="close-btn" onClick={closeModal}>&times;</span>
        {/* <img src={event.imageURL} alt={event.name} /> */}
        <h2>{event.name}</h2>
        <p>{event.date}</p>
        <p>{event.location}</p>
        <p>{event.description}</p>
      </div>
    </div>
  );
}

export default EventModal;
