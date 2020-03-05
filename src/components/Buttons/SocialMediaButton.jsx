import React from 'react';
import './SocialMediaButton.scss'

const SocialMediaButton = ({ name }) => {
  
  const handleClick = () => {
    console.log("Button Clicked")
  }
  console.log("button " + name + "-button")
  return (
    <button 
      className={"button " + name + "-button"} 
      onClick={handleClick}
    >
      {"Sign in with " + name}
    </button>
  )
}

export default SocialMediaButton