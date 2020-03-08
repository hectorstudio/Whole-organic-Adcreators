import React from "react";
import FormCheck from "../FormElements/FormCheck";
import "./ProfileForm.style.scss";
import FormLocation from "../FormElements/FormLocation";
import FormInput from "../FormElements/FormInput";
import PrimaryButton from "../Buttons/PrimaryButton";

const ProfileForm = () => {
  const handleClick = () => {
    
  };
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
            <FormCheck title="A supplier" />
            <FormCheck title="A buyer" />
            <FormCheck title="Both" />
          </div>
        </div>
        <div className="profile-form-location">
          <div className="profile-form-location-title">I am located in</div>
          <FormLocation />
        </div>
        <div className="profile-form-footer">
          <PrimaryButton text="Start browsing" action={handleClick} />
        </div>
      </div>
    </div>
  );
};

export default ProfileForm;
