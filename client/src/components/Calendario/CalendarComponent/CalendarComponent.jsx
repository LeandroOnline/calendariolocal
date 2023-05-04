import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import dayjs from "dayjs";
import { useState } from "react";
import AddEvent from "../AddEvent/AddEvent";

const Calendar = () => {
  const [value, setValue] = useState(dayjs(Date.now()));
  return (
    <>
      <AddEvent />
      <DateCalendar value={value} onChange={(newValue) => setValue(newValue)} />
    </>
  );
};

export default Calendar;
