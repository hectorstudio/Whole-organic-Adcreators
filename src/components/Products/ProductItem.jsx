import React, { Fragment } from "react";
import "./Products.scss";

const ProductItem = ({
  extend,
  imgUrl,
  price,
  currency,
  title,
  subtitle,
  textInfo,
  sellerNameLink,
  textDescription
}) => {
  return (
    <li className="products-list__item">
      <div className="products-list-product-header">
        <img className="products-list__img" src={imgUrl} alt="products-img" />
        <div className="products-list__text-price">
          <div className="products-list-price-block">
            <p className="products-list-price-block__text-dollar">{currency}</p>
            {price}
          </div>
        </div>
      </div>
      <div className="products-product-footer">
        <p className="products-list__title">{title}</p>
        <p className="products-list__subtitle">{subtitle}</p>
        <div className="products-list__text-info">
          {textInfo}
          <a className="products-list__link" href={sellerNameLink}>
            name of seller
          </a>
        </div>
        <i className="icon-heart-fill products-icon"></i>
        {extend === true && (
          <Fragment>
            <p className="products-list__text-description">{textDescription}</p>
            <div className="products-list-btn-section">
              <button className="products-list-btn-section__edit">
                Edit/Repost
              </button>
              <button className="products-list-btn-section__preview">
                Preview
              </button>
            </div>
          </Fragment>
        )}
      </div>
    </li>
  );
};

export default ProductItem;
