import React from "react";
import FormInput from "../../components/FormElements/FormInput";
import CreatePassBtn from "../../components/Buttons/CreatePassBtn";
import Breadcrumbs from "../../components/Breadcrumbs";
import "./CreatePassPage.scss";

const CreatePassPage = () => {
  const action = () => {};
  return (
    <div>
      <Breadcrumbs parent="Home" child="Create a new password" />
      <div className="create-pass-block">
        <h2 className="custom-title">Create a new password</h2>
        <p className="custom-text">
          Enter your email address and we will send you an email to reset your
          password
        </p>
        <form className="create-pass-block-form">
          <div className="create-pass-input-section">
            <div className="create-pass-block-wrapper wrapper">
              <FormInput
                label=""
                value=""
                type="password"
                placeholder="Create new password"
                className="formInput"
              />
            </div>
            <div className="create-pass-block-wrapper wrapper">
              <FormInput
                label=""
                value=""
                type="email"
                placeholder="Confrim new password"
                className="formInput"
              />
            </div>
          </div>
          <CreatePassBtn text="Save password" action={action} disabled={true} />
        </form>
      </div>
    </div>
  );
};

export default CreatePassPage;
