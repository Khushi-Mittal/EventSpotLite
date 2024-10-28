import React from "react";
import "./Modal.css";

const Modal = ({ event, onClose }) => (
    <div className="modal-overlay" onClick={onClose}>
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-button" onClick={onClose}>X</button>
            <h2>{event.name}</h2>
            <img src={event.image} alt={event.name} />
            <p>{event.description}</p>
        </div>
    </div>
);

export default Modal;
