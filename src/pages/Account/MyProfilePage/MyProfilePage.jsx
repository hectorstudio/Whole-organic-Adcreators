import React from "react";
import "./MyProfilePage.scss";
import PersonalInfo from "../../../components/Profile/PersonalInfo/PersonalInfo";
import AddressInfo from "../../../components/Profile/AddressModal/AddressModal";
import SelectProduct from "../../../components/Profile/SelectProduct/SelectProduct";
import NotifyInfo from "../../../components/Profile/NotifyInfo/NotifyInfo";
import BusinessInfo from "../../../components/Profile/BusinessInfo/BusinessInfo";
import NotifyBottom from "../../../components/Profile/NotifyBottom/NotifyBottom";
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
        <NotifyBottom />
      </div>
    </div>
  );
};

export default MyProfilePage;
