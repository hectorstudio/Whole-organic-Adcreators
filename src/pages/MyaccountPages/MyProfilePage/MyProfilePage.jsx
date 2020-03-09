import React from "react";
import "./MyProfilePage.scss";
import Breadcrumbs from "../../../components/Breadcrumbs/Breadcrumbs";
import PersonalInfo from "../../../components/PersonalInfo/PersonalInfo"
import AddressInfo from '../../../components/AddressModal/AddressModal'

import SelectProduct from "../../../components/SelectProduct/SelectProduct"
import NotifyInfo from "../../../components/NotifyInfo/NotifyInfo"
import BusinessInfo from "../../../components/BusinessInfo/BusinessInfo";
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
      <div className="my-profile">
        <PersonalInfo />
        <SelectProduct />
        <NotifyInfo />
        <BusinessInfo />
        <div className="my-addresses">
          <AddressInfo />
        </div>
        <div className="notify-bottom">
          notify-bottom
        </div>
      </div>
    </div>
  );
};

export default MyProfilePage;