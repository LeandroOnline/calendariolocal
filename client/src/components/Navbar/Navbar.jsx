// navbar
import React from "react";
import { Link } from "react-router-dom";
// prueba date picjer antd
import { DatePicker } from "antd";
//import "antd/dist/antd.css";

const Navbar = () => {
  return (
    <div>
      <p>Esta es la prueba AntDesign</p>
      <DatePicker />
      <Link to="/">Home</Link>
      <Link to="/oficios">Oficios</Link>
      <Link to="/calendar">Calendario</Link>
    </div>
  );
};

export default Navbar;
