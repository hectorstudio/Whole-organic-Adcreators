import React from "react";
import FormCheck from "../FormElements/FormCheck";
import "./ProfileForm.style.scss";
import FormLocation from "../FormElements/FormLocation";
import FormSelect from "../FormElements/FormSelect";

const ProfileForm = () => {
  return (
    <div className="profile-form">
      <FormCheck title="By Registering, you agree that you’ve read and accepted our User Agreement" />
      <FormSelect placeholder="select-example" name="select-example"/>
      <FormLocation title="Testing" />
    </div>
  );
};

export default ProfileForm;
