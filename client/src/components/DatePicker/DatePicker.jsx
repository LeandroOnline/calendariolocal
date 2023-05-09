import { useState } from "react";
import AddEvent from "../AddEvent/AddEvent";
import { DatePicker, Space } from "antd";
const { RangePicker } = DatePicker;

const CalendarDatePicker = () => {
  const [date, setDate] = useState(false);
  console.log(date);

  if (date) {
    console.log(date[0]);
  }

  return (
    <RangePicker
      renderExtraFooter={() => "extra footer"}
      showTime
      onChange={(e) => {
        setDate(e);
      }}
    />
  );
};

export default CalendarDatePicker;
