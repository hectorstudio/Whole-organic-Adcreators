import React from "react";
import "./Products.scss";
import ProductItem from "./ProductItem";
const Products = ({ productData }) => {
  return (
    <ul className="products-list">
      {productData.map(item => (
        <ProductItem
          key={item.id}
          imgUrl={item.imgUrl}
          price={item.price}
          currency={item.currency}
          title={item.title}
          subtitle={item.subtitle}
          textInfo={item.textInfo}
          sellerNameLink={item.sellerLink}
          extend={item.extend}
          textDescription={item.textDescription}
        />
      ))}
    </ul>
  );
};

export default Products;
