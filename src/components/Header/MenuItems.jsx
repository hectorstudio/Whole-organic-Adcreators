import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import './MenuItems.style.scss';

const MenuItems = ({ path, title, setActiveBurger }) => {
  let container;

  container = (
    <div className="router-container">
      <NavLink
        to={path}
        exact
        className={
          path === '/'
            ? 'router__link home'
            : path === '/contact'
            ? 'router__link contact'
            : 'router__link'
        }
        activeClassName="activeRoute"
        onClick={() => setActiveBurger(false)}
      >
        {title}
      </NavLink>
    </div>
  );

  return (
    <div
      className={
        path === '/'
          ? 'menu__item-router-home'
          : path === '/faqs&support' || path === '/business'
          ? 'menu__item-router-faq-business'
          : path === '/contact'
          ? 'menu__item-router-contact'
          : title === 'Burger'
          ? 'menu__item-router-burger'
          : 'menu__item-router'
      }
    >
      {container}
    </div>
  );
};

MenuItems.propTypes = {
  path: PropTypes.string,
  title: PropTypes.string.isRequired,
  setActiveBurger: PropTypes.func
};

export default MenuItems;
