import React from "react";
import "./MyProfilePage.scss";
import PersonalInfo from "../../../components/PersonalInfo/PersonalInfo";
import AddressInfo from "../../../components/AddressModal/AddressModal";
import SelectProduct from "../../../components/SelectProduct/SelectProduct";
import NotifyInfo from "../../../components/NotifyInfo/NotifyInfo";
import BusinessInfo from "../../../components/BusinessInfo/BusinessInfo";
import NotifyBottom from "../../../components/NotifyBottom/NotifyBottom";
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
