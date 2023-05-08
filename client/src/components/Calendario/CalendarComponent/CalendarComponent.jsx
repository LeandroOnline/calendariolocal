import { useState } from "react";
import AddEvent from "../AddEvent/AddEvent";
import { DatePicker } from "antd";
//import "antd/dist/antd.css";

const Calendar = () => {
  const [value, setValue] = useState(Date.now());
  return (
    <>
      <p>Esta es la prueba AntDesign</p>
      <DatePicker />
      <AddEvent />
    </>
  );
};

export default Calendar;
