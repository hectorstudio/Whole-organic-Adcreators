import React, { useState } from "react";
import "./SubMenuItem.style.scss";
import PropTypes from "prop-types";
import DropDownMenu from "./DropDownMenu";
import { useLocation } from "react-router-dom";

const SubMenuItem = ({ title, DropMenuData, sizes }) => {
  const [activeDropMenu, setActiveDropMenu] = useState(false);
  //console.log(activeDropMenu);
  const location = useLocation();
  let subMenu;

  if (location.pathname === "/" && sizes.width > 1120) {
    subMenu = (
      <div className="sub-menu-container">
        <i className="icon-burger" />
        <span className="sub-menu__text">{title}</span>
      </div>
    );
  }

  if (location.pathname === "/" && sizes.width < 1121) {
    subMenu = (
      <div
        className="sub-menu-container"
        onClick={() => setActiveDropMenu(!activeDropMenu)}
      >
        <i className="icon-burger" />
        <span className="sub-menu__text">{title}</span>
      </div>
    );
  }

  if (location.pathname !== "/") {
    subMenu = (
      <div
        className="sub-menu-container"
        onClick={() => setActiveDropMenu(!activeDropMenu)}
      >
        <i className="icon-burger" />
        <span className="sub-menu__text">{title}</span>
      </div>
    );
  }

  return (
    <React.Fragment>
      {subMenu}
      <DropDownMenu
        DropMenuData={DropMenuData}
        activeDropMenu={activeDropMenu}
        setActiveDropMenu={setActiveDropMenu}
        sizes={sizes}
      />
    </React.Fragment>
  );
};

SubMenuItem.propTypes = {
  title: PropTypes.string,
  sizes: PropTypes.object,
  DropMenuData: PropTypes.arrayOf(PropTypes.object)
};

export default SubMenuItem;
