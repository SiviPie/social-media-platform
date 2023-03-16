import React from "react";
import { Link } from "react-router-dom";
import { MenuData } from "./MenuData";

import "./Menu.css";

function Menu() {
  return (
    <div className="nav-wrapper">
      {MenuData.map((item, index) => {
        return (
          <Link to={item.path} key={item.id}>
            <li className="nav-text">
              {item.icon}
              <span className="menu-title">{item.title}</span>
            </li>
          </Link>
        );
      })}
    </div>
  );
}

export default Menu;
