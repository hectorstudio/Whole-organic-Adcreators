import React from "react";
import SignUpForm from "../../components/Forms/SignUpForm";
import SocialMediaButton from "../../components/Buttons/SocialMediaButton";
import "./RegisterPage.scss";
import Breadcrumbs from "../../components/Breadcrumbs";
const RegisterPage = () => {
  return (
    <div>
      <Breadcrumbs parent="Home" child="Register" />
      <div className="create-account">
        <div className="create-account-wrapper">
          <SignUpForm title="Create an account" />
        </div>
        <div className="create-account-social-network-wrapper">
          <h2 className="custom-title">Or register using</h2>
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

export default RegisterPage;
