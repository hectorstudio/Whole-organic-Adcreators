import React from "react";
import "./FormInput.style.scss";
const FormInput = ({
  label = "",
  type = "text",
  value = "",
  placeholder = "",
  className = "formInput",
  alert,
  changeAction
}) => {
  const changeValue = event => {
    if (changeAction) changeAction(event.target.value);
  };

  return (
    <div className="input-wrapper">
      {label !== "" ? <label className="label-for-input">{label}</label> : ""}
      <input
        className={`${className}`}
        style={alert ? { border: "1px solid #ff5757" } : { border: "none" }}
        type={type}
        placeholder={placeholder}
        onChange={changeValue}
      />

      {alert ? <span className={"error-message"}>{alert}</span> : ""}
    </div>
  );
};

export default FormInput;
