import React, { useState, useEffect } from "react";
import Breadcrumb from "../../../components/Breadcrumbs/Breadcrumbs";
import CartListContainer from "../../../components/Cart/CartListContainer";
import OrderSummary from "../../../components/Cart/OrderSummary";
import "./CartPage.scss";

const breadCrumbs = [
  {
    id: "1",
    title: "Home",
    path: "/",
    active: ""
  },
  {
    id: "2",
    title: "My Cart",
    path: "/cart",
    active: "active"
  }
];

const mockupCartItems = [
  {
    id: "1",
    img: "../images/product-photo-1.jpg",
    price: 56.99,
    title: "Yellow plastic chair",
    subtitle: "Furniture",
    info: "From Location here",
    slug: "name of seller",
    titleLink: "name of seller",
    iconDefault: "icon-heart",
    iconFill: "icon-heart-fill"
  },
  {
    id: "2",
    img: "../images/product-photo-2.jpg",
    price: 56.99,
    title: "Yellow plastic chair",
    subtitle: "Beauty",
    info: "From Location here",
    slug: "name of seller",
    titleLink: "name of seller",
    iconDefault: "icon-heart",
    iconFill: "icon-heart-fill"
  }
];

const mockupCartInfo = [
  {
    id: "1",
    quantities: 3
  },
  {
    id: "2",
    quantities: 1
  }
];

const CartPage = () => {
  const [cartItems, setCartItems] = useState([]);
  const [cartInfo, setCartInfo] = useState([]);

  useEffect(() => {
    if (cartItems.length < 1 && !mockupCartItems.length < 1) {
      setCartItems(mockupCartItems);
      setCartInfo(mockupCartInfo);
    }
  }, [cartItems, cartInfo]);

  const removeItem = value => {
    let data = [...cartItems];
    data = data.filter(element => element.id !== value);
    setCartItems(data);
    let cart = [...cartInfo];
    cart = cart.filter(element => element.id !== value);
    setCartInfo(cart);
  };

  const clickCheckout = value => {
    console.log("Click Checkout");
  };

  return (
    <div className="cart-list-container">
      <Breadcrumb breadcrumbsItems={breadCrumbs} />
      <h2 className="cart-title">My Cart({cartItems.length})</h2>
      <div className="row cart-body">
        <CartListContainer
          items={cartItems}
          cartInfo={cartInfo}
          removeItem={removeItem}
        />
        <OrderSummary cartInfo={cartInfo} clickCheckout={clickCheckout} />
      </div>
    </div>
  );
};

export default CartPage;
