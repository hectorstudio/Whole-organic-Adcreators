import React from 'react';
import './RecentlyViewedPage.scss'
import '../../../constants/css/CustomTitle.scss'
import Products from '../../../components/Products'

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

const RecentlyViewedPage = () => {
  return (
    <div className="recently-view">
      <h2 className="recently-view__title custom-title">Recently viewed</h2>
      <Products productData={productData} />
    </div>
  )
}


export default RecentlyViewedPage