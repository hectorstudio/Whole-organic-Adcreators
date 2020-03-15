import React from "react";
import "./SetupProfilePage.style.scss";
import ProfileForm from "../../../components/Forms/ProfileForm";
import Breadcrumbs from "../../../components/Breadcrumbs/Breadcrumbs";

const breadCrumbs = [
  {
    id: '1',
    title: 'Home',
    path: '/',
    active: ""
  },
  {
    id: '2',
    title: 'Setup your profile',
    path: '/profilesetup',
    active: "active"
  }
]

const SetupProfilePage = () => {
  return (
    <div className="setup-profile-page">
      <Breadcrumbs breadcrumbsItems={breadCrumbs} />
      <ProfileForm />
    </div>
  );
};

export default SetupProfilePage;