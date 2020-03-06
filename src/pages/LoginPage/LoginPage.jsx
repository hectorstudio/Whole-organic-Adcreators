import React from "react";
import SignInForm from "../../components/Forms/SignInForm";
import SocialMediaButton from "../../components/Buttons/SocialMediaButton";
import Breadcrumbs from "../../components/Breadcrumbs";
import "./LoginPage.scss";
const LoginPage = () => {
  return (
    <div>
      <Breadcrumbs parent="Home" child="Log in" />
      <div className="login-in-account">
        <div className="login-in-account-wrapper">
          <div className="login-page">
            <SignInForm title="Welcome back" />
          </div>
        </div>
        <div className="login-in-account-social-network-wrapper">
          <h2 className="custom-title">Or login using</h2>
          <div className="facebook-block">
            <SocialMediaButton text="Facebook" />
          </div>
          <div className="google-block">
            <SocialMediaButton text="Google" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
