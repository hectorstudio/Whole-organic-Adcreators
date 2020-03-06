import React from "react";
import "./PrimaryButton.scss";

const PrimaryButton = ({ text, action, disabled }) => {

  return (
    <button
      className="primarybutton"
      onClick={action(text)}
      disabled={disabled ? true : false}
    >
      {text}
    </button>
  );
};

export default PrimaryButton;