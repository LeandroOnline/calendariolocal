import { Avatar, List, Space } from "antd";
import { React, useEffect } from "react";
import reformat from "../../helpers/reformat";
import useGlobalStore from "../../store/Store";

//Que necesito?
// Traer los eventos creados al nuevo componente
// Remplazar los harcodeados por los actuales
// Dar nuevo formato a como llegan los eventos

// ------>COMO ME LLEGA LA INFORMACION?
// datos del back - array de objetos [{},{}]
// end: "2023-05-17T14:53:50.828Z"
// start: "2023-05-15T14:53:48.828Z"
// title: "Holaaaaaa"
// __v: 0
// _id:"6462478e269fe59e376cab21"

// ------->COMO NECESITO QUE ME LLEGUE? y transformarlo
//[{},{},{},{}]
// {
//   href: "https://ant.design",
//   title: `Evento de ejemplo ${i}`,
//   avatar: `https://xsgames.co/randomusers/avatar.php?g=pixel&key=${i}`,
//   description: "Aca me llega la fecha.",
//   //Cambiar datos a fecha
//   content: "Esta es la descripcion del evento", //descripcion
//   vermas: "Click aqui para ver mas", // Vista de detalle del evento
// }
//Como lo hago ?
// [{}, {}, {}, {}]
// Funcion para dar formato nuevo en helpers/reformat
// CONECTARME AL STORE

const ListEvents = () => {
  const { events, GetEvents } = useGlobalStore();
  useEffect(() => {
    GetEvents();
  }, []);
  //Guardo en data dataeventsformated los events formateados
  const dataeventsformated = reformat(events);
  return (
    <List
      itemLayout="vertical"
      size="large"
      pagination={{
        onChange: (page) => {
          console.log(page);
        },
        pageSize: 6,
      }}
      dataSource={dataeventsformated}
      footer={
        <div>
          <b>Calendario </b> Sobre nosotros click aqui
        </div>
      }
      renderItem={(item) => (
        <List.Item
          key={item.title}
          extra={
            <img
              width={240}
              alt="logo"
              src="https://i.blogs.es/43bc2c/avatar-2/1366_2000.jpeg"
            />
          }
        >
          <List.Item.Meta
            avatar={<Avatar src={item.avatar} />}
            title={<a href={item.href}>{item.title}</a>}
            description={item.description}
          />
          {item.content}
        </List.Item>
      )}
    />
  );
};
export default ListEvents;
