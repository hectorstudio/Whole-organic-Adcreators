import React from "react";
import "./ForgotButton.scss";

const ForgotButton = ({ text, action, disabled }) => {
  return (
    <button
      className="forgotbutton"
      onClick={action(text)}
      disabled={disabled ? true : false}
    >
      {text}
    </button>
  );
};

export default ForgotButton;
