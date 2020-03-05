import React from "react";
import "./FormLocation.style.scss";

const FormLocation = ({title}) => {
  return ( 
    <div className="form-location">
      <div className="form-title location">{title}</div>
      <i className="fas fa-map-marker-alt"></i>
      <input type="text" name="location" placeholder="Select"/>
    </div>
  );
};

export default FormLocation;
