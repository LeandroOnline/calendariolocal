import { useState } from "react";
import { DatePicker } from "antd";
import axiosAddEvent from "../../api/axiosAddEvent";
const { RangePicker } = DatePicker;

const CalendarDatePicker = () => {
  const [date, setDate] = useState(false);
  const [title, setTitle] = useState("");
  const [detail, setDetail] = useState("");

  const sendEvent = async () => {
    const event = {
      title,
      start: date[0],
      end: date[1],
      detail,
    };

    await axiosAddEvent(event);
  };

  return (
    <>
      <input
        type="text"
        placeholder="Titulo del Evento"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <RangePicker
        renderExtraFooter={() => "extra footer"}
        showTime
        onChange={(e) => {
          setDate(e);
        }}
      />
      <input
        type="text"
        placeholder="Descripcion"
        value={detail}
        onChange={(e) => setDetail(e.target.value)}
      />
      <button onClick={sendEvent}>Agregar</button>
    </>
  );
};

export default CalendarDatePicker;
