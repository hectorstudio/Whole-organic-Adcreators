import React, { useState, useEffect } from "react";
import "./AddressModal.scss";
import FormSelect from "../FormElements/FormSelect";

const AddressModal = props => {
  const [isOpen, setIsOpen] = useState(false);
  const [addresses, setAddresses] = useState([]);
  const [currentStreet, setCurrentStreet] = useState("");
  const [currentCity, setCurrentCity] = useState("");
  const [currentState, setCurrentState] = useState("");
  const [currentCountry, setCurrentCountry] = useState("");

  useEffect(() => {}, [addresses]);

  const openModal = () => {
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
  };

  const handleStreet = event => {
    setCurrentStreet(event.target.value);
  };

  const addAddress = () => {
    const address =
      currentStreet +
      ", " +
      currentCity +
      " " +
      currentState +
      " " +
      currentCountry;
    let data = [...addresses];
    data.push({
      address: address,
      street: currentStreet,
      city: currentCity,
      state: currentState,
      country: currentCountry
    });
    setAddresses(data);
    setCurrentStreet("");
    setCurrentState("");
    setCurrentCity("");
    setCurrentCountry("");
    setIsOpen(false);
  };

  const deleteAddress = (event, index) => {
    console.log(index);
    let data = [...addresses];
    data.splice(index);
    setAddresses(data);
  };

  const editAddress = (event, index) => {
    let data = [...addresses];
    setCurrentStreet(data[index].street);
    setCurrentState(data[index].state);
    setCurrentCity(data[index].city);
    setCurrentCountry(data[index].country);
    setIsOpen(true);
  };

  return (
    <div className="my-addresses">
      <p className="my-addresses__title">My addresses</p>
      <ul className="my-addresses-list">
        {addresses.map((addr, index) => (
          <li className="my-addresses-list__item" key={`address${index}`}>
            <span className="my-addresses-list__text-info">{addr.address}</span>
            <div>
              <span
                className="my-addresses-list__text-functionality edit"
                onClick={event => editAddress(event, index)}
              >
                Edit
              </span>
              <span
                className="my-addresses-list__text-functionality"
                onClick={event => deleteAddress(event, index)}
              >
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
            <i className="fas fa-times modal-close" onClick={closeModal}></i>
            <div className="my-addresses-modal-form">
              <label className="label-for-input">Street address</label>
              <input
                required=""
                type="text"
                className="addresses-input__item custom-input"
                value={currentStreet}
                placeholder="Type street..."
                onChange={handleStreet}
              />
              <div className="addresses-select__item" style={{zIndex:99}}>
                <p className="addresses-select__item-title">City</p>
                <FormSelect
                  placeholder="Select"
                  name="subcategory"
                  defaultValue={currentCity}
                  setValue={setCurrentCity}
                />
              </div>
              <div className="addresses-select__item" style={{zIndex:98}}>
                <p className="addresses-select__item-title">State/Province</p>
                <FormSelect
                  placeholder="Select"
                  name="subcategory"
                  defaultValue={currentState}
                  setValue={setCurrentState}
                />
              </div>
              <div className="addresses-select__item" style={{zIndex:97}}>
                <p className="addresses-select__item-title">Country</p>
                <FormSelect
                  placeholder="Select"
                  name="subcategory"
                  defaultValue={currentCountry}
                  setValue={setCurrentCountry}
                />
              </div>
              <button
                type="button"
                className="my-addresses-modal-form__btn"
                onClick={addAddress}
              >
                Send address
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddressModal;
