import React from "react";
import SignUpForm from "../../../components/Forms/SignUpForm";
import SocialMediaButton from "../../../components/Buttons/SocialMediaButton";
import "./RegisterPage.style.scss";
import Breadcrumbs from "../../../components/Breadcrumbs/Breadcrumbs";
const breadCrumbs = [
  {
    id: "1",
    title: "Home",
    path: "/",
    active: ""
  },
  {
    id: "2",
    title: "Register",
    path: "/register",
    active: "active"
  }
];
const RegisterPage = () => {
  return (
    <div>
      <Breadcrumbs breadcrumbsItems={breadCrumbs} />
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
