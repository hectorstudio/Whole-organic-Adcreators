import React from "react";
import "./FormInput.scss";
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
    changeAction(event.target.value);
  };

  return (
    <div className="form-input-container">
      {label !== "" ? <p className="textLabel">{label}</p> : ""}
      <input
        className={`${className}`}
        style={alert ? { border: "1px solid #ff5757" } : { border: "none" }}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={changeValue}
      />
      {alert ? <span className={"error-message"}>{alert}</span> : ""}
    </div>
  );
};

export default FormInput;
