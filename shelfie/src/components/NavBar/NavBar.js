import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div>
      <Link to="/form">
        <div>Form</div>
      </Link>
      <Link to="/">
        <div>Dashboard</div>
      </Link>
      <Link to="/header">
        <div>Header</div>
      </Link>
    </div>
  );
}

export default NavBar;
