import React from "react"
import './Products.scss'

const ProductItem = ({ imgUrl, price, currency, title, subtitle, textInfo, sellerNameLink }) => {
  return (
    <li className="products-list__item">
      <div className="products-list-product-header">
        <img className="products-list__img" src={imgUrl} alt="products-img"  />
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
          <a className="products-list__link" href={sellerNameLink}>name of seller</a>
        </div>
        <i className="icon-heart-fill products-icon"></i>
      </div>
    </li>
    
  )
}

export default ProductItem