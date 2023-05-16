import { Avatar, List, Space } from "antd";
import React from "react";

const data = Array.from({
  length: 23,
}).map((_, i) => ({
  href: "https://ant.design",
  title: `Evento de ejemplo ${i}`,
  avatar: `https://xsgames.co/randomusers/avatar.php?g=pixel&key=${i}`,
  description: "Aca me llega la fecha.", //Cambiar datos a fecha
  content: "Esta es la descripcion del evento", //descripcion
  vermas: "Click aqui para ver mas", // Vista de detalle del evento
}));
const IconText = ({ icon, text }) => (
  <Space>
    {React.createElement(icon)}
    {text}
  </Space>
);

const ListEvents = () => (
  <List
    itemLayout="vertical"
    size="large"
    pagination={{
      onChange: (page) => {
        console.log(page);
      },
      pageSize: 5,
    }}
    dataSource={data}
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
export default ListEvents;
