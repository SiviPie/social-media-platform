import React from "react";
import { Link } from "react-router-dom";
import { MenuData } from "./MenuData";

import "./Menu.css";

function Menu() {
  return (
    <div className="nav-wrapper">
      {MenuData.map((item, index) => {
        return (
          <li key={index} className="nav-text">
            <Link to={item.path}>
              {item.icon}
              <span className="menu-title">{item.title}</span>
            </Link>
          </li>
        );
      })}
    </div>
  );
}

export default Menu;
