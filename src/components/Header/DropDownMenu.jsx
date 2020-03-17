import React from 'react';
import './DropDownMenu.style.scss';
import { NavLink, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

const DropDownMenu = ({ DropMenuData, activeDropMenu, setActiveDropMenu, sizes }) => {
  const location = useLocation();
  let classDropMenu;

  if (location.pathname === '/') {
    classDropMenu = 'dropdown-menu-container';
  } else if (!activeDropMenu) {
    classDropMenu = 'dropdown-menu-container hide';
  } else if (sizes.width > 1120) {
    classDropMenu = 'dropdown-menu-container drop-menu-lg';
  } else {
    classDropMenu = 'dropdown-menu-container drop-menu-sm';
  }

  if (location.pathname === '/' && sizes.width < 1121 && activeDropMenu) {
    classDropMenu = 'dropdown-menu-container drop-menu-sm';
  }

  if (location.pathname === '/' && sizes.width < 1121 && !activeDropMenu) {
    classDropMenu = 'dropdown-menu-container hide';
  }

  if (location.pathname === '/' && sizes.width > 1120) {
    classDropMenu = 'dropdown-menu-container';
  }

  return (
    <div className={classDropMenu}>
      <ul className="dropdown-menu-list">
        {DropMenuData.map(item => {
          return (
            <li className="dropdown-menu-list__item" key={item.id}>
              <NavLink
                to={'/' + item.slug}
                className="dropdown-menu-list__link"
                onClick={() => setActiveDropMenu(false)}
              >
                <span className="dropdown-menu__text">{item.text}</span>
                <i className="icon-arrow" />
              </NavLink>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

DropDownMenu.propTypes = {
  activeDropMenu: PropTypes.bool,
  setActiveDropMenu: PropTypes.func,
  sizes: PropTypes.object,
  DropMenuData: PropTypes.arrayOf(PropTypes.object)
};

export default DropDownMenu;
