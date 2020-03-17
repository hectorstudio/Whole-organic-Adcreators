import React from 'react';
import { NavLink } from 'react-router-dom';
import './Logo.style.scss';

const logo = require('../../images/logo.svg');

const Logo = () => {
  return (
    <div className="logo-container">
      <NavLink className="logo-container__link" to="/">
        <img src={logo} alt="logo" className="logo-container-link-img" />
      </NavLink>
    </div>
  );
};

export default Logo;
