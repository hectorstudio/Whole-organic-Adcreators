import React from "react";
import { Link } from "react-router-dom";
import "./Menu.style.scss";

const menuItems = [
  {
    title: "About us",
    id: "1",
    path: "/about"
  },
  {
    title: "FAQs & Support",
    id: "2",
    path: "/faqs&support"
  },
  {
    title: "Legal",
    id: "3",
    path: "/legal"
  },
  {
    title: "Contact us",
    id: "4",
    path: "/contact"
  },
  {
    title: "Ad a post",
    id: "5",
    path: "/post"
  },
  {
    title: "Pricing packages",
    id: "6",
    path: "/pricing"
  }
];

const Menu = () => {
  return (
    <div className="menu-block">
      <ul className="footer-menu-list">
        {menuItems.map(item => {
          return (
            <li key={item.id} className="footer-menu__item">
              <Link
                to={item.path}
                className="footer-menu__link"
                onClick={() => window.scrollTo(0, 0)}
              >
                {item.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Menu;
