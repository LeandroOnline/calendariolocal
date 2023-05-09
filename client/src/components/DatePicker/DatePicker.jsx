import { useState } from "react";
import AddEvent from "../AddEvent/AddEvent";
import { DatePicker, Space } from "antd";
const { RangePicker } = DatePicker;

const CalendarDatePicker = () => {
  const [date, setDate] = useState();
  return (
    <>
      <RangePicker
        renderExtraFooter={() => "extra footer"}
        showTime
        // value={date}
        onChange={(e) => {
          setDate(e);
        }}
      />
      {console.log(date)}
    </>
  );
};

export default CalendarDatePicker;
