import { useState } from "react";
import AddEvent from "../AddEvent/AddEvent";
import { DatePicker, Space } from "antd";
const { RangePicker } = DatePicker;

const CalendarDatePicker = () => (
  <Space direction="vertical" size={12}>
    <br></br>
    <br></br>
    <p>Esta es la prueba en CalendarComponent DatePicker</p>
    <br></br>
    <RangePicker renderExtraFooter={() => "extra footer"} showTime />

    <AddEvent />
  </Space>
);

export default CalendarDatePicker;
