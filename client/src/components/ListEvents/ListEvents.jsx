import { Avatar, List, Space } from "antd";
import React from "react";
import useGlobalStore from "../../store/Store";
import { useEffect } from "react";

// // lista de eventos
// const ListEvents = () => {
//   console.log("ListEvent");

// const { events, GetEvents } = useGlobalStore();

//   useEffect(() => {
//       GetEvents();
//   }, []);

//   return (
//     <div>
//       {events?.map((event,key) => (
//         <p key={key}>→ {event.title}</p>
//       ))}
//     </div>
//   );
// };
// export default ListEvents;
const data = Array.from({
  length: 23,
}).map((_, i) => ({
  href: "https://ant.design",
  title: `ant design part ${i}`,
  avatar: `https://xsgames.co/randomusers/avatar.php?g=pixel&key=${i}`,
  description:
    "Ant Design, a design language for background applications, is refined by Ant UED Team.",
  content:
    "We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.",
}));


const IconText = ({ icon, text }) => (
  <Space>
    {React.createElement(icon)}
    {text}
  </Space>
);

const ListEvents = () => {
  useEffect(() => {
      GetEvents();
  }, []);

  const { events, GetEvents } = useGlobalStore();
  console.log(events);
  //Aca funcion para formatiar los datos del back

  return 


  <List
    itemLayout="vertical"
    size="large"
    pagination={{
      onChange: (page) => {
        console.log(page);
      },
      pageSize: 3,
    }}
    dataSource={data}
    footer={
      <div>
        <b>ant design</b> footer part
      </div>
    }
    renderItem={(item) => (
      <List.Item
        key={item.title}
        actions={[
          <IconText
            icon={StarOutlined}
            text="156"
            key="list-vertical-star-o"
          />,
          <IconText
            icon={LikeOutlined}
            text="156"
            key="list-vertical-like-o"
          />,
          <IconText
            icon={MessageOutlined}
            text="2"
            key="list-vertical-message"
          />,
        ]}
        extra={
          <img
            width={272}
            alt="logo"
            src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
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
};
export default ListEvents;

// datos del back
// const add = new Evento({
//   title: req.body.title,
//   start: req.body.start,
//   end: req.body.end,
//   details: req.body.details,
// });

// end
// : 
// "2023-05-18T17:53:40.745Z"
// start
// : 
// "2023-05-17T17:53:33.745Z"
// title
// : 
// "Soy crack"
// __v
// : 
// 0
// _id
// : 
// "646271b1269fe59e376cab2b"