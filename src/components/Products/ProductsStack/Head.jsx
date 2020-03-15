import React from 'react';
/*import { NavLink } from 'react-router-dom';*/
import './Head.scss';
import PropTypes from 'prop-types';

const sectionLogo = require('../../../images/section-logo.png');

const Head = ({ title }) => {
  return (
    <div className="head">
      <img src={sectionLogo} alt="section-logo" className="header__img" />
      <h3 className="header__title">{title}</h3>
      {/*<div className="header-more-block">
        <div className="plus-container">
          <span className="plus__text">+</span>
        </div>
        <NavLink exact to="/hz" className="header__link">
          more
        </NavLink>
      </div>*/}
    </div>
  );
};

Head.propTypes = {
  title: PropTypes.string
};

export default Head;
