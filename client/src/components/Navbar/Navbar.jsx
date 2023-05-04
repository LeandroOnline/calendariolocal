// navbar
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <Link to='/'>Home</Link>
      <Link to='/oficios'>Oficios</Link>
      <Link to='/calendar'>Calendario</Link>
    </div>
  );
};

export default Navbar;
