import React, { useState } from "react";
import EventCard from "./EventCard";
import Modal from "./Modal";
import events from "../data";

const EventList = () => {
    const [selectedEvent, setSelectedEvent] = useState(null);
    const [search, setSearch] = useState("");

    const filteredEvents = events.filter(
        (event) =>
            event.name.toLowerCase().includes(search.toLowerCase()) ||
            event.location.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div>
            <input
                type="text"
                placeholder="Search events..."
                onChange={(e) => setSearch(e.target.value)}
            />
            <div className="event-list">
                {filteredEvents.map((event) => (
                    <EventCard key={event.id} event={event} onClick={setSelectedEvent} />
                ))}
            </div>
            {selectedEvent && (
                <Modal event={selectedEvent} onClose={() => setSelectedEvent(null)} />
            )}
        </div>
    );
};

export default EventList;
