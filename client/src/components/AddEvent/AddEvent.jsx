import { useState } from "react";
import { DatePicker } from "antd";
const { RangePicker } = DatePicker;

const CalendarDatePicker = () => {
  const [date, setDate] = useState(false);
  console.log(date);

  if (date) {
    console.log(date[0]);
  }

  return (
    <>
      <input type="text" placeholder="Titulo del Evento"/>
      <RangePicker
        renderExtraFooter={() => "extra footer"}
        showTime
        onChange={(e) => {
          setDate(e);
        }}
      />
    </>
  );
};

export default CalendarDatePicker;
