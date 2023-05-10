import API from "./api";
import axios from "axios";

const addEvent = async (event) => {
  return await axios
    .get(API + "/getevents")
    .then((data) => console.log(data.data))
    .catch((err) => console.log(err));
};
export default addEvent;