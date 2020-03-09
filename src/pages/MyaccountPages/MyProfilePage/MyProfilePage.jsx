import React from "react";
import "./MyProfilePage.scss";
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
    title: 'My account',
    path: '/my-account',
    active: ""
  },
  {
    id: '3',
    title: 'My profile',
    path: '/my-profile',
    active: "active"
  }
]

const MyProfilePage = () => {
  return (
    <div className="">
      <Breadcrumbs breadcrumbsItems={breadCrumbs} />
    </div>
  );
};

export default MyProfilePage;