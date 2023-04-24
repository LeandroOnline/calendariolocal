import format from "date-fns/format";
import getDay from "date-fns/getDay";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./App.css";
import data from "date-fns/locale/en-US";


import { useEffect, useState } from "react";

import axios from "axios";

const API = "http://localhost:3000/api";

const locales = {
    "en-US": data,
};
const localizer = dateFnsLocalizer({
    format,
    parse,
    startOfWeek,
    getDay,
    locales,
});


const App = () => {
  const [newEvent, setNewEvent] = useState({ title: "", start: "", end: "" });
  const [post, setPost] = useState(false);
  const [allEvents, setAllEvents] = useState([]);

  // Manejadores de Eventos
  const handleAddEvent = async () => {
    await axios.post(API + "/addevent", newEvent).then((response) => {
      console.log(response.data);
      setPost(!post);
    });
  };

  // Get eventos desde el back
  const getEvents = async () => {
    await axios.get(API + "/getevents").then((response) => {
      setAllEvents(response.data);
      console.log(response.data)
    });
  };

  // Carga los eventos desde el back al cargar la pagina y al agregarse un nuevo evento
  useEffect(() => {
    getEvents();
  }, [post]);

  return (
    <div className="App">
      <h1>Calendar Lea</h1>
      <h2>Add New Event</h2>
      <div>
        <input
          type="text"
          placeholder="Add Title"
          style={{ width: "20%", marginRight: "10px" }}
          value={newEvent.title}
          onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
        />
        <DatePicker
          placeholderText="Start Date"
          style={{ marginRight: "10px" }}
          selected={newEvent.start}
          onChange={(start) => setNewEvent({ ...newEvent, start })}
        />
        <DatePicker
          placeholderText="End Date"
          selected={newEvent.end}
          onChange={(end) => setNewEvent({ ...newEvent, end })}
        />
        <button style={{ marginTop: "10px" }} onClick={() => handleAddEvent()}>
          Add Event
        </button>
      </div>


      <Calendar
        localizer={localizer}
        events={allEvents}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500, margin: "50px" }}
      />
    </div>
  );
};

export default App;
