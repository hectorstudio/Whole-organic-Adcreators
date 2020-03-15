import React from "react";
import "./CartListContainer.style.scss";

const CartListContainer = () => {
  return (
    <div className="cart-list">
      <div className="cart-item">
        <div className="item-image"></div>
        <div className="item-detail"></div>
        <div className="cart-action"></div>
      </div>
    </div>
  );
};

export default CartListContainer;