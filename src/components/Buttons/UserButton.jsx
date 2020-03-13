import React from "react";
import "./UserButton.scss";

/**
 * @varient - primary | createpass | forgotpass | normal | add-search-products | select-products | primary-white
 * @size - small | medium | big
 */
const UserButton = ({ text, action, disabled, varient }) => {
  return (
    <button
      className={`btn ${varient || ""} ${disabled ? "disabled" : ""}`}
      onClick={action}
      disabled={disabled ? true : false}
    >
      {text}
    </button>
  );
};

export default UserButton;
