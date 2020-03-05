import React from "react";
import "./FormLocation.style.scss";

const FormLocation = () => {
  return (
    <div className="form-location">
      <i className="fas fa-map-marker-alt"></i>
      <input type="text" name="location" placeholder="Select"/>
    </div>
  );
};

export default FormLocation;
