import React from "react";
import "./UserButton.scss";

/**
 * @varient - primary | createpass | forgotpass
 * @size - small | medium | big
 */
const UserButton = ({ text, action, disabled, varient }) => {
  return (
    <button
      className={`btn ${varient || ''}`}
      onClick={action(text)}
      disabled={disabled ? true : false}
    >
      {text}
    </button>
  );
};

export default UserButton;
