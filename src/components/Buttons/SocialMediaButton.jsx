import React from 'react';
import './SocialMediaButton.scss'
const SocialMediaButton = ({ text }) => {
  
  const handleClick = () => {
    console.log("button " + text + "-button Clicked")
  }
  const iconClassName = text === "Facebook" ? "icon-facebook" : "fab fa-google"
  return (
    
    <button 
      className={"button " + text + "-button"} 
      onClick={handleClick}
    >
      <i className={iconClassName} />
      {"Sign in with " + text}
    </button>
  )
}

export default SocialMediaButton