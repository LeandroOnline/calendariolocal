import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";
import { useState } from "react";
import { Link } from "react-router-dom";

const items = [
  {
    label: <Link to="/">Inicio</Link>,
    key: "mail",
    icon: <MailOutlined />,
  },
  {
    label: <Link to="/dash">DashBoard</Link>,
    key: "dash",
    icon: <MailOutlined />,
  },
  {
    label: <Link to="/calendar">Calendario</Link>,
    key: "app",
    icon: <AppstoreOutlined />,
    // disabled: true,
  },
  {
    label: "Usuario",
    key: "SubMenu",
    icon: <SettingOutlined />,
    children: [
      {
        type: "group",
        label: "",
        children: [
          {
            label: <Link to="/login">Iniciar Sesión</Link>,
            key: "Iniciar",
          },
          {
            label: <Link to="/signup">Registrarse</Link>,
            key: "Registro",
          },
          {
            label: "Cerrar Sesión",
            key: "Cerrar",
          },
        ],
      },
    ],
  },
];
const Navbar = () => {
  const [current, setCurrent] = useState("mail");
  const onClick = (e) => {
    // console.log('click ', e);
    setCurrent(e.key);
  };
  return (
    <Menu
      onClick={onClick}
      selectedKeys={[current]}
      mode="horizontal"
      items={items}
    />
  );
};
export default Navbar;
