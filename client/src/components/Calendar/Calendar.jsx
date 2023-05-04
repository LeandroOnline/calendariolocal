import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import { useState } from "react";
import dayjs, { Dayjs } from "dayjs";

const Calendar = () => {
  const [value, setValue] = useState(dayjs("2022-04-17"));

  return (
    <>
      <DateCalendar value={value} onChange={(newValue) => setValue(newValue)} />
    </>
  );
};

export default Calendar;
