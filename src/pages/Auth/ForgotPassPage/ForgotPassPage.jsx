import React from "react";
import UserButton from "../../components/Buttons/UserButton";
import FormInput from "../../components/FormElements/FormInput";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import "./ForgotPassPage.scss";

const breadCrumbs = [
  {
    id: '1',
    title: 'Home',
    path: '/',
    active: ""
  },
  {
    id: '2',
    title: 'Forgot password',
    path: '/forgot-pass',
    active: "active"
  }
]

const ForgotPassPage = () => {
  const action = () => {};
  return (
    <div>
      <Breadcrumbs breadcrumbsItems={breadCrumbs} />
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
          <UserButton text="Continue" action={action} disabled={true} varient="forgotpass" />
        </form>
      </div>
    </div>
  );
};

export default ForgotPassPage;
