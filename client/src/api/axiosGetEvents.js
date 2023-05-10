import API from "./api";
import axios from "axios";

const addEvent = async () => {
  return await axios
    .get(API + "/getevents")
    .then((data) => data.data)
    .catch((err) => console.log(err));
};

export default addEvent;
