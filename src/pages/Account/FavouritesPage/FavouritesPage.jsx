import React from 'react';
import './FavouritesPage.scss'
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

const FavourtesPage = () => {
  return (
    <div className="favourites">
      <h2 className="favourites__title custom-title">Favourites</h2>
      <Products productData={productData} />
    </div>
  )
}


export default FavourtesPage