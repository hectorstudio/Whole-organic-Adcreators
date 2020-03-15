import React from "react";

import "./CartListContainer.style.scss";

const CartItem = () => {
  return (
    <div className="cart-item">
      <div className="item-image"></div>
      <div className="item-detail"></div>
      <div className="cart-actions"></div>
    </div>
  );
};

export default CartItem;
