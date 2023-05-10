import API from "./api";
import axios from "axios";

const addEvent = async (event) => {
  return await axios
    .post(API + "/addevent", event)
    .then((data) => console.log(data))
    .catch((err) => console.log(err));
};
export default addEvent;
