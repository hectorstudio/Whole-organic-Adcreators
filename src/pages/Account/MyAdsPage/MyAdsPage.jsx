import React from "react";
import "./MyAdsPage.style.scss";
import Products from "../../../components/Products";

const productData = [
  {
    id: "1",
    imgUrl: "../../images/product-photo-5.jpg",
    price: "55.2",
    currency: "$",
    title: "Yellow plastic chair",
    subtitle: "Beauty",
    textInfo: "From Location here, ",
    sellerLink: "/name of seller",
    textDescription:
      "Product description, dolor esse eu minim incididunt aliquip dolore magna eiusmod incididunt mollit et occaecat nisi ex aute elit velit cupidatat eiusmod excepteur incididunt nulla in tempor enim minim incididunt velit tempor irure mollit voluptate consequat commodo.",
    extend: true
  },
  {
    id: "2",
    imgUrl: "../../images/product-photo-6.jpg",
    price: "55.2",
    currency: "$",
    title: "Yellow plastic chair",
    subtitle: "Beauty",
    textInfo: "From Location here, ",
    sellerLink: "/name of seller",
    textDescription:
      "Product description, dolor esse eu minim incididunt aliquip dolore magna eiusmod incididunt mollit et occaecat nisi ex aute elit velit cupidatat eiusmod excepteur incididunt nulla in tempor enim minim incididunt velit tempor irure mollit voluptate consequat commodo.",
    extend: true
  },
  {
    id: "3",
    imgUrl: "../../images/product-photo-6.jpg",
    price: "55.2",
    currency: "$",
    title: "Yellow plastic chair",
    subtitle: "Beauty",
    textInfo: "From Location here, ",
    sellerLink: "/name of seller",
    textDescription:
      "Product description, dolor esse eu minim incididunt aliquip dolore magna eiusmod incididunt mollit et occaecat nisi ex aute elit velit cupidatat eiusmod excepteur incididunt nulla in tempor enim minim incididunt velit tempor irure mollit voluptate consequat commodo.",
    extend: true
  },
  {
    id: "4",
    imgUrl: "../../images/product-photo-6.jpg",
    price: "55.2",
    currency: "$",
    title: "Yellow plastic chair",
    subtitle: "Beauty",
    textInfo: "From Location here, ",
    sellerLink: "/name of seller",
    textDescription:
      "Product description, dolor esse eu minim incididunt aliquip dolore magna eiusmod incididunt mollit et occaecat nisi ex aute elit velit cupidatat eiusmod excepteur incididunt nulla in tempor enim minim incididunt velit tempor irure mollit voluptate consequat commodo.",
    extend: true
  }
];

const MyAdsPage = () => {
  return (
    <div className="my-announcements">
      <h2 className="my-announcements__title custom-title">My Ads</h2>
      <Products productData={productData} />
    </div>
  );
};

export default MyAdsPage;
