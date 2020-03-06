import React from "react";
import ForgotButton from "../../components/Buttons/ForgotButton";
import FormInput from "../../components/FormElements/FormInput";
import Breadcrumbs from "../../components/Breadcrumbs";
import "./ForgotPassPage.scss";

const ForgotPassPage = () => {
  const action = () => {};
  return (
    <div>
      <Breadcrumbs parent="Home" child="ForgotPassPage" />
      <div className="forgot-pass-block">
        <h2 className="custom-title">Forgot your password?</h2>
        <p className="custom-text">
          Enter your email address and we will send you an email to reset your
          password
        </p>
        <form className="forgot-pass-block-form">
          <div className="wrapper">
            <FormInput
              label=""
              value=""
              type="email"
              placeholder="Email address"
              className="formInput"
            />
          </div>
          <ForgotButton text="Login" action={action} disabled={true} />
        </form>
      </div>
    </div>
  );
};

export default ForgotPassPage;
