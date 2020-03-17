import React from "react";
import "./FormCheck.style.scss";

const FormCheck = ({ title, checked, checkTerm }) => {
  const handleChange = event => {
    const status = event.target.getAttribute("value");
    if (status === "true") {
      checkTerm(false);
    } else {
      checkTerm(true);
    }
  };
  return (
    <div className="checkbox-wrapper" onClick={handleChange}>
      <p className="label">{title}</p>
      <input
        type="checkbox"
        checked={checked ? "checked" : ""}
        onChange={handleChange}
      />
      <span className="checkmark" value={checked}></span>
    </div>
  );
};

export default FormCheck;
