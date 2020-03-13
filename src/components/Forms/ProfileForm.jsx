import React, { useState } from "react";
import FormCheck from "../FormElements/FormCheck";
import "./ProfileForm.style.scss";
import FormLocation from "../FormElements/FormLocation";
import FormInput from "../FormElements/FormInput";
import UserButton from "../Buttons/UserButton";

const ProfileForm = () => {
  const [statusBoth, setStatusBoth] = useState(false);
  const [statusSupplier, setStatusSupplier] = useState(false);
  const [statusBuyer, setStatusBuyer] = useState(false);
  const handleClick = () => {
    
  };

  const checkBoth = (value) => {
    setStatusBoth(value);
  }

  const chekcSupplier = (value) => {
    setStatusSupplier(value);
  }

  const checkBuyer = (value) => {
    setStatusBuyer(value);
  }

  return (
    <div className="profile-form-container">
      <h2 className="profile-form-title">Set-up your profile</h2>
      <div className="profile-form-body">
        <div className="profile-form-inputs elements-body">
          <FormInput value="" name="first_name" placeholder="First Name" />
          <FormInput value="" name="last_name" placeholder="Last Name" />
          <FormInput
            value=""
            type="email"
            name="email"
            placeholder="Email address"
          />
        </div>
        <div className="profile-form-checks">
          <div className="profile-form-checks-title">I am</div>
          <div className="profile-form-checks-body elements-body">
            <FormCheck title="A supplier" checked={statusSupplier} checkTerm={chekcSupplier} />
            <FormCheck title="A buyer" checked={statusBuyer} checkTerm={checkBuyer} />
            <FormCheck title="Both" checked={statusBoth} checkTerm={checkBoth} />
          </div>
        </div>
        <div className="profile-form-location">
          <div className="profile-form-location-title">I am located in</div>
          <FormLocation />
        </div>
        <div className="profile-form-footer">
          <UserButton text="Start browsing" action={handleClick} varient="primary" />
          <UserButton text="Personalize your account" action={handleClick} varient="primary-white" />
        </div>
      </div>
    </div>
  );
};

export default ProfileForm;
