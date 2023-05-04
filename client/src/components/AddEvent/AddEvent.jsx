import API from "../../assets/API/api";
import { useEffect, useState } from "react";
import axios from "axios";
import { DatePicker, StaticTimePicker } from "@mui/x-date-pickers";

const AddEvent = () => {
  const [newEvent, setNewEvent] = useState({ title: "", start: "", end: "" });
  const [allEvents, setAllEvents] = useState([]);
  const [valueStart, setValueStart] = useState(null);
  const [valueEnd, setValueEnd] = useState(null);
  const [time, setTime] = useState(null);

  const addEvent = async () => {
    await axios.post(API + "/addevent", newEvent).then((response) => {
      getEvents();
    });
  };

  const getEvents = async () => {
    await axios.get(API + "/getevents").then((response) => {
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

  useEffect(() => {
    getEvents();
  }, []);

  return (
    <>
      <DatePicker
        value={valueStart}
        onChange={(newValueStart) => setValue(newValueStart)}
      />
      <DatePicker
        value={valueEnd}
        onChange={(newValueEnd) => setValue(newValueEnd)}
      />
      <StaticTimePicker
        orientation="landscape"
        value={time}
        onChange={(time) => setTime(time)}
      />
      {console.log(time)}
    </>
  );
};
export default AddEvent;
