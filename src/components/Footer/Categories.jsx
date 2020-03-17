import React from "react";
import "./Categories.style.scss";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Categories = ({ footerItems }) => {
  return (
    <div className="footer-categories-block">
      <p className="categories__title">Categories</p>
      <ul className="footer-categories-list">
        {footerItems.map(item => {
          return (
            <li key={item.id} className="footer-categories__item">
              <Link
                to={"/" + item.slug}
                className="footer-categories__link"
                onClick={() => window.scrollTo(0, 0)}
              >
                {item.text}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

Categories.propTypes = {
  footerItems: PropTypes.arrayOf(Object)
};

export default Categories;
