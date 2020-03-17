import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import './SideBlocksItem.style.scss';

export const SideBlocksItem = props => {
  let itemContent;

  if (props.slug === 'cart') {
    itemContent = (
      <li className="side-container-list__item">
        <div className="cart-container">
          <NavLink className="cart-link" to={'/' + props.slug}>
            <i className="icon-shopping-cart" />
            <div className="counter-container">
              <span className="counter-text">{props.cartNumber}</span>
            </div>
          </NavLink>
        </div>
      </li>
    );
  } else {
    if (props.slug === 'post') {
      itemContent = (
        <li className="side-container-list__item">
          <NavLink className="post-link" to={'/' + props.slug}>
            <i className="icon-plus" />
            <span className="post-text">Post an Ad</span>
          </NavLink>
        </li>
      );
    } else {
      itemContent = (
        <li className="side-container-list__item">
          <div className="sign-up-container">
            <i className="icon-user" />
          </div>
          <span className="auth-text">
            <NavLink className="sign-in-link" to={'/' + props.slug[0]}>
              Login
            </NavLink>
            <span className="sign-up-text-between-link"> or </span>
            <NavLink className="sign-up-link" to={'/' + props.slug[1]}>
              Register
            </NavLink>
          </span>
        </li>
      );
    }
  }

  return <React.Fragment>{itemContent}</React.Fragment>;
};

SideBlocksItem.propTypes = {
  slug: PropTypes.oneOfType([PropTypes.string, PropTypes.array])
};
