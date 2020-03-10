import React from "react";
import "./Products.scss";
import ProductItem from "./ProductItem";
const Products = () => {
  const productData = [
    {
      id: "1",
      imgUrl: "../../images/product-photo-5.jpg",
      price: "55.2",
      currency: "$",
      title: "Yellow plastic chair",
      subtitle: "Beauty",
      textInfo: "From Location here, ",
      sellerLink: "/name of seller"
    },
    {
      id: "2",
      imgUrl: "../../images/product-photo-6.jpg",
      price: "55.2",
      currency: "$",
      title: "Yellow plastic chair",
      subtitle: "Beauty",
      textInfo: "From Location here, ",
      sellerLink: "/name of seller"
    },
    {
      id: "3",
      imgUrl: "../../images/product-photo-6.jpg",
      price: "55.2",
      currency: "$",
      title: "Yellow plastic chair",
      subtitle: "Beauty",
      textInfo: "From Location here, ",
      sellerLink: "/name of seller"
    },
    {
      id: "4",
      imgUrl: "../../images/product-photo-6.jpg",
      price: "55.2",
      currency: "$",
      title: "Yellow plastic chair",
      subtitle: "Beauty",
      textInfo: "From Location here, ",
      sellerLink: "/name of seller"
    }
  ];
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
        />
      ))}
    </ul>
  );
};

export default Products;
