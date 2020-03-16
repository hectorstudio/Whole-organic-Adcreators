import React from "react";
import "./OrderSummary.style.scss";

const OrderSummary = ({ cartInfo, clickCheckout }) => {
  return (<div className="order-summary">
    <button className="btn-checkout">Go to Checkout</button>
    <div className="cart-sub-total">
      <div className="cart-sub-item">
        <span>Item(3)</span>
        <span>$33.14</span>
      </div>
      <div className="cart-sub-item">
        <span>Shipping</span>
        <span>Free</span>
      </div>
    </div>
    <div className="cart-total">
      <div className="cart-sub-item">
        <span>Total</span>
        <span>$33.14</span>
      </div>
    </div>
  </div>);
};

export default OrderSummary;
