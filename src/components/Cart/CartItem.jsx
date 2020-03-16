import React, { useState } from "react";
import Select from "react-select";
import "./CartListContainer.style.scss";

const quantityOptions = [
  { label: "Quantity: 200", value: "200" },
  { label: "Quantity: 150", value: "150" },
  { label: "Quantity: 100", value: "100" },
  { label: "Quantity: 50", value: "50" }
];

const CartItem = ({ item, removeItem }) => {
  const [selectedQuantity, setSelected] = useState("");
  const [placeholder, setPlaceholder] = useState("Select Quantity...");
  const handleChange = event => {
    setSelected(event.value);
    setPlaceholder(event.label);
  };
  return (
    <div className="cart-item">
      <div className="item-image">
        <img src={item.img} alt={`cart-item-${item.id}`} />
      </div>
      <div className="item-detail">
        <div className="item-title">{item.title}</div>
        <div className="item-info">
          {item.info}, <span className="item-slug">{item.slug}</span>
        </div>
        <div className="item-actions">
          <span>Make an enquiry</span>
          <span
            onClick={() => {
              removeItem(item.id);
            }}
          >
            Remove
          </span>
        </div>
      </div>
      <div className="cart-actions">
        <button className="btn btn-unit">
          <span className="currency">$</span>
          {item.price} /unit
        </button>
        <div className="btn quantities">
          <Select
            placeholder={placeholder}
            options={quantityOptions}
            onChange={handleChange}
            value={selectedQuantity}
          />
          <i className="icon-dropdown" />
        </div>
      </div>
    </div>
  );
};

export default CartItem;
