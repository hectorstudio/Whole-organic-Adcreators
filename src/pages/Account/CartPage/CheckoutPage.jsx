import React, { useState, useEffect } from "react";
import Breadcrumb from "../../../components/Breadcrumbs/Breadcrumbs";
import FormInput from "../../../components/FormElements/FormInput";
import UserButton from "../../../components/Buttons/UserButton";
import OrderSummary from "../../../components/Cart/OrderSummary";
import Radio from "@material-ui/core/Radio";
import { withStyles } from "@material-ui/core/styles";
import { green } from "@material-ui/core/colors";

import "./CartPage.style.scss";

const GreenRadio = withStyles({
  root: {
    color: green[400],
    "&$checked": {
      color: green[600]
    }
  },
  checked: {}
})(props => <Radio color="default" {...props} />);

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

const visaLogo = require("../../../images/visa.png");
const masterLogo = require("../../../images/master.png");
const paypalLogo = require("../../../images/paypal.png");

const CheckoutPage = () => {
  const [cartInfo, setCartInfo] = useState([]);
  const [payment, setPayment] = useState("");

  useEffect(() => {
    if (cartInfo.length < 1) {
      setCartInfo(mockupCartInfo);
    }
  }, [cartInfo]);

  const clickCheckout = () => {
    console.log("click Checkout");
  };

  const changeAction = () => {
    console.log("change action");
  };

  const clickAction = () => {
    console.log("click action");
  };

  const handleChange = (event, value) => {
    setPayment(value);
  };

  return (
    <div className="cart-list-container">
      <Breadcrumb breadcrumbsItems={breadCrumbs} />
      <h2 className="cart-title">My Cart({cartInfo.length})</h2>
      <div className="row cart-body">
        <div className="checkout-body">
          <div className="section payment-method">
            <div className="title">Pay with</div>
            <div className="payment-item">
              <GreenRadio
                checked={payment === "visa"}
                onChange={event => handleChange(event, "visa")}
                value={payment}
                name="radio-button-demo"
                inputProps={{ "aria-label": "visa" }}
              />
              <img src={visaLogo} alt="payment visa" />
            </div>
            <div className="payment-item">
              <GreenRadio
                checked={payment === "master"}
                onChange={event => handleChange(event, "master")}
                value={payment}
                name="radio-button-demo"
                inputProps={{ "aria-label": "master" }}
              />
              <img src={masterLogo} alt="payment master" />
            </div>
            <div className="payment-item">
              <GreenRadio
                checked={payment === "paypal"}
                onChange={event => handleChange(event, "paypal")}
                value={payment}
                name="radio-button-demo"
                inputProps={{ "aria-label": "paypal" }}
              />
              <img src={paypalLogo} alt="payment paypal" />
            </div>
          </div>
          <div className="section payment-address">
            <div className="title">Send to</div>
            <div className="address">
              <div className="address-item">
                <span>
                  Rony Chiha
                  <br />
                  L1, 45 Bowman St
                  <br />
                  Pyrmont, New South Wales 2009
                  <br />
                  Australia
                  <br />
                  47xxxxx44
                </span>
                <i className="icon-dropdown" />
              </div>
              <div className="address-action">
                <span>Edit</span>
              </div>
            </div>
            <UserButton
              text="Add new address"
              varient="primary"
              disabled={false}
              action={clickAction}
            />
          </div>
          <div className="section add-coupons">
            <div className="title">Add coupons</div>
            <div className="coupon-form">
              <FormInput
                placeholder="Enter code"
                alert={false}
                changeAction={changeAction}
              />
              <UserButton
                text="Apply"
                varient="primary"
                disabled={false}
                action={clickAction}
              />
            </div>
          </div>
        </div>
        <OrderSummary cartInfo={cartInfo} clickCheckout={clickCheckout} />
      </div>
    </div>
  );
};

export default CheckoutPage;
