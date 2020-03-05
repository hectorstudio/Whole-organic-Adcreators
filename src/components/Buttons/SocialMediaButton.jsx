import React from 'react';
import './SocialMediaButton.scss'
const SocialMediaButton = ({ name }) => {
  
  const handleClick = () => {
    console.log("button " + name + "-button Clicked")
  }
  const iconClassName = name === "Facebook" ? "icon-facebook" : "fab fa-google"
  return (
    
    <button 
      className={"button " + name + "-button"} 
      onClick={handleClick}
    >
      <i className={iconClassName} />
      {"Sign in with " + name}
    </button>
  )
}

export default SocialMediaButton