import { Calendar, momentLocalizer } from "react-big-calendar";
import DatePicker from "react-datepicker";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "react-datepicker/dist/react-datepicker.css";
import "./App.css";

import { useEffect, useState } from "react";

import axios from "axios";

const API = "http://localhost:3000/api";

const localizer = momentLocalizer(moment);

const App = () => {
  const [newEvent, setNewEvent] = useState({ title: "", start: "", end: "" });
  const [allEvents, setAllEvents] = useState([]);

  // Manejadores de Eventos
  const addEvent = async () => {
    await axios.post(API + "/addevent", newEvent).then((response) => {
      console.log(response.data);
      getEvents();
    });
  };

  // Get eventos desde el back
  const getEvents = async () => {
    await axios.get(API + "/getevents").then((response) => {
      // Parseo el dato de fecha a Date para leerse correctamente
      const alldata = response.data;
      let dataparser = [];
      alldata.map((data) => {
        dataparser.push({
          title: data.title,
          start: new Date(Date.parse(data.start)),
          end: new Date(Date.parse(data.end)),
        });
      });
      setAllEvents(dataparser);
    });
  };

  // Carga los eventos desde el back al cargar la pagina y al agregarse un nuevo evento
  useEffect(() => {
    getEvents();
  }, []);

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
        <button style={{ marginTop: "10px" }} onClick={addEvent}>
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
