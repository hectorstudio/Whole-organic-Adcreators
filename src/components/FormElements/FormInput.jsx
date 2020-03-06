import React from 'react';
import './FormInput.scss'
const FormInput = ({ label, type, value, placeholder, className }) => {

  
  return (
    <div>
      {label !== "" ? <p className="textLabel">{label}</p> : ''}
      <input 
        className={className} 
        type={type} 
        placeholder={placeholder} 
      />
    </div>
  )
}

export default FormInput