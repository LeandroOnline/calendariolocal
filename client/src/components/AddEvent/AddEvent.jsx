import { useState } from "react";
import { AutoComplete, DatePicker, Input } from "antd";
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

  const [autoCompleteResult, setAutoCompleteResult] = useState([]);
  const onWebsiteChange = (value) => {
    if (!value) {
      setAutoCompleteResult([]);
    } else {
      setAutoCompleteResult(
        [".com", ".org", ".net"].map((domain) => `${value}${domain}`)
      );
    }
  };
  const websiteOptions = autoCompleteResult.map((website) => ({
    label: website,
    value: website,
  }));

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
      <AutoComplete
        options={websiteOptions}
        onChange={onWebsiteChange}
        placeholder="website"
      >
        <Input />
      </AutoComplete>
      <button onClick={sendEvent}>Agregar</button>
    </>
  );
};

export default CalendarDatePicker;
