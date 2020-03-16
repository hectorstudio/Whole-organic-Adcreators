import React from "react";
import CartItem from "./CartItem";
import "./CartListContainer.style.scss";

const CartListContainer = ({ items, cartInfo, removeItem }) => {
  return (
    <div className="cart-list">
      {items.map((item, index) => (
        <CartItem
          key={`cart-item-${index}`}
          item={item}
          removeItem={removeItem}
        />
      ))}
    </div>
  );
};

export default CartListContainer;
