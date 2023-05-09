import { Badge, Calendar } from "antd";
import CalendarCss from "./CalendarComponent.module.css";

import { ConfigProvider } from "antd";
import es_ES from "antd/locale/es_ES";

const getListData = (value) => {
  let listData;
  switch (value.date()) {
    case 8:
      listData = [
        {
          type: "warning",
          content: "Este tambien es un evento.",
        },
        {
          type: "success",
          content: "Evento maraton entre rios",
        },
      ];
      break;
    case 10:
      listData = [
        {
          type: "warning",
          content: "Evento de musica en el rio",
        },
        {
          type: "success",
          content: "Evento de Maraton",
        },
      ];
      break;
    case 15:
      listData = [
        {
          type: "Evento de prueba1",
          content: "La descripcion para el evento1",
        },
        {
          type: "Evento de prueba2",
          content: "La descripcion para el evento2...",
        },
        {
          type: "Evento de prueba3",
          content: "La descripcion para el evento3...",
        },
        {
          type: "error",
          content: "El evento no se guardo",
        },
      ];
      break;
    default:
  }
  return listData || [];
};
const getMonthData = (value) => {
  if (value.month() === 8) {
    return 1394;
  }
};
const CalendarApp = () => {
  const monthCellRender = (value) => {
    const num = getMonthData(value);
    return num ? (
      <div className="notes-month">
        <section>{num}</section>
        <span>Backlog number</span>
      </div>
    ) : null;
  };
  const dateCellRender = (value) => {
    const listData = getListData(value);
    return (
      <ConfigProvider locale={es_ES}>
        <ul className={CalendarCss.events}>
          {listData.map((item) => (
            <li key={item.content}>
              <Badge status={item.type} text={item.content} />
            </li>
          ))}
        </ul>
      </ConfigProvider>
    );
  };
  const cellRender = (current, info) => {
    if (info.type === "date") return dateCellRender(current);
    if (info.type === "month") return monthCellRender(current);
    return info.originNode;
  };
  return <Calendar cellRender={cellRender} />;
};
export default CalendarApp;
