import React from "react";
import EventList from "./components/EventList";
import "./index.css";

const App = () => (
    <div className="App">
        <header>
            <h1>EventSpot Lite</h1>
        </header>
        <EventList />
    </div>
);

export default App;
