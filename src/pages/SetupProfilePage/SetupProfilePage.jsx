import React from "react";
import "./SetupProfilePage.style.scss";
import ProfileForm from "../../components/Forms/ProfileForm";
import Breadcrumbs from "../../components/Breadcrumbs";

const SetupProfilePage = () => {
  return (
    <div className="setup-profile-page">
      <Breadcrumbs parent={"Home"} child={"Set-up your profile"} />
      <ProfileForm />
    </div>
  );
};

export default SetupProfilePage;
