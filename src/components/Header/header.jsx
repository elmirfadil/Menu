import React from "react";
import "./header.css";
import { NavLink } from "react-router-dom";
function Header() {
  return (
    <div id="header">
      <div className="container">
        <div className="header">
          <img
            src="https://www.pngall.com/wp-content/uploads/8/Restaurant-Logo-PNG-Free-Download.png"
            alt="logo"
          />
             <nav>
              <NavLink to="/">Menu</NavLink>
              <NavLink to="/orders">Orders</NavLink>
              <NavLink to="/admin">Admin</NavLink>
             </nav>
        </div>
      </div>
    </div>
  );
}

export default Header;
