import React from 'react';
import './PrimaryButton.scss'

const PrimaryButton = ({ name, action, status }) => {
  return (
    <button className="primarybutton" onClick={action(name)} >
      {name}
    </button>
  )
}

export default PrimaryButton