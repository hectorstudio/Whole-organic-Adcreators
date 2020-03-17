import React from "react";

import { Link, useLocation } from "react-router-dom";
import "./AccountMenu.style.scss";

const AccountMenu = ({ routes }) => {
  const location = useLocation();

  const getActivePath = path => {
    if (location.pathname === path) {
      return "active-account-menu-list__link";
    }

    return "";
  };

  return (
    <ul className="account-menu-list">
      <li className="account-menu-list__item">
        {routes.map(item => (
          <div className="account-menu-list__item-blocks" key={item.id}>
            <Link
              to={item.path}
              className={`account-menu-list__link ${getActivePath(item.path)}`}
            >
              {item.title}
            </Link>
            <i className="fas fa-caret-right"></i>
          </div>
        ))}
      </li>
    </ul>
  );
};

export default AccountMenu;
