import React from "react";
import "./MyProfilePage.scss";
import PersonalInfo from "../../../components/PersonalInfo/PersonalInfo"
import AddressInfo from '../../../components/AddressModal/AddressModal'
import FormCheckBoxToggle from "../../../components/FormElements/FormCheckBoxToggle"
import SelectProduct from "../../../components/SelectProduct/SelectProduct"
import NotifyInfo from "../../../components/NotifyInfo/NotifyInfo"
import BusinessInfo from "../../../components/BusinessInfo/BusinessInfo";

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
          <p className="notify-bottom__title">Notify me about</p>
          <div className="notify-bottom-checkbox-block">
            <FormCheckBoxToggle text="New requests" id="5" />
            <FormCheckBoxToggle text="New messages" id="6" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfilePage;