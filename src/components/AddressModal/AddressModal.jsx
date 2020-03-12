import React, { useState } from "react";
import "./AddressModal.scss";
import Select from "react-select"

const AddressModal = props => {
  const [isOpen, setIsOpen] = useState(false);
  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }

  const address = [
    {
      id: "1",
      street: "9a Newcastle Street, Rose Bay 2029"
    },
    {
      id: "2",
      street: "9a Newcastle Street, Rose Bay 2029"
    }
  ];

  const handleChange = () => {};

  const handleInputChange = () => {};
  return (
    <div className="my-addresses">
      <p className="my-addresses__title">My addresses</p>
      <ul className="my-addresses-list">
        {address.map(addr => (
          <li className="my-addresses-list__item" key={addr.id}>
            <span className="my-addresses-list__text-info">{addr.street}</span>
            <div>
              <span className="my-addresses-list__text-functionality edit">
                Edit
              </span>
              <span className="my-addresses-list__text-functionality">
                Delete
              </span>
            </div>
          </li>
        ))}
      </ul>
      <button className="my-addresses__btn" onClick={openModal}>
        Add new address
      </button>
      {isOpen && (
        <div className="styles_overlay">
          <div
            className="styles_modal modal_Center"
            role="dialog"
            aria-modal="true"
          >
            <h2 className="my-addresses-modal__title custom-title">
              Add new address
            </h2>
            <i className="fas fa-times" onClick={closeModal}></i>
            <form className="my-addresses-modal-form">
              <div className="wrapper">
                <label className="label-for-input">Street address</label>
                <input
                  required=""
                  type="text"
                  className="addresses-input__item custom-input"
                  value="sdfasdf"
                  onChange={handleInputChange}
                />
              </div>
              <div className="addresses-select__item">
                <p className="addresses-select__item-title">City</p>
                <Select placeholder="Select" />
                <i className="icon-dropdown" />
              </div>
              <div className="addresses-select__item">
                <p className="addresses-select__item-title">State/Province</p>
                <Select placeholder="Select" />
                <i className="icon-dropdown" />
              </div>
              <div className="addresses-select__item">
                <p className="addresses-select__item-title">Country</p>
                <Select placeholder="Select" />
                <i className="icon-dropdown" />
              </div>
              <button type="button" className="my-addresses-modal-form__btn">
                Send address
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddressModal;
