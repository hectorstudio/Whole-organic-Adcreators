import React from "react";
import "./SocialMediaButton.style.scss";
const SocialMediaButton = ({ text }) => {
  const handleClick = () => {
    console.log("button " + text + "-button Clicked");
  };
  const iconClassName =
    text === "Facebook" ? "social icon-facebook" : "social fab fa-google";
  return (
    <button
      className={"social button " + text + "-button"}
      onClick={handleClick}
    >
      <i className={iconClassName} />
      {"Sign in with " + text}
    </button>
  );
};

export default SocialMediaButton;
