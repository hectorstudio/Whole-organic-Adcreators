import React from "react";
import Breadcrumb from "../../../components/Breadcrumbs/Breadcrumbs";
import "./CartPage.scss";

const breadCrumbs = [
  {
    id: '1',
    title: 'Home',
    path: '/',
    active: ""
  },
  {
    id: '2',
    title: 'My Cart',
    path: '/cart',
    active: "active"
  }
]

const CartPage = () => {
  return (
    <div className="cart-container">
      <Breadcrumb breadcrumbsItems={breadCrumbs} />
      <h2>My Cart</h2>
      <div className="row">
        <div className="cart-list"></div>
        <div className="order-summmary"></div>
      </div>
    </div>
  );
};

export default CartPage;
