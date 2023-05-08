import API from "../../../assets/API/api";
import { useEffect, useState } from "react";
import axios from "axios";

const AddEvent = () => {
  const [newEvent, setNewEvent] = useState({ title: "", start: "", end: "" });
  const [allEvents, setAllEvents] = useState([]);
  const [valueStart, setValueStart] = useState(null);
  const [valueEnd, setValueEnd] = useState(null);
  const [time, setTime] = useState(null);

  // const addEvent = async () => {
  //   await axios.post(API + "/addevent", newEvent).then((response) => {
  //     getEvents();
  //   });
  // };

  return <></>;
};
export default AddEvent;
