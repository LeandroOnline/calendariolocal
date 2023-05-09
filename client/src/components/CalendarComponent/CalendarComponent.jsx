import { useState } from "react";
import CalendarCss from "./CalendarComponent.module.css";
import { Calendar, theme } from "antd";

const onPanelChange = (value, mode) => {
  console.log(value.format("YYYY-MM-DD"), mode);
};

const CalendarComponent = () => {
  const [date, setDate] = useState("");
  console.log(date.$D);
  console.log(date.$M);
  console.log(date.$y);
 
  
  const { token } = theme.useToken();
  const wrapperStyle = {
    width: 400,
    border: `1px solid ${token.colorBorderSecondary}`,
    borderRadius: token.borderRadiusLG,
  };

  return (
    <div style={wrapperStyle}>
      <Calendar
        fullscreen={false}
        // onPanelChange={onPanelChange}
        onChange={(e) => setDate(e)}
      />
    </div>
  );
};
export default CalendarComponent;
