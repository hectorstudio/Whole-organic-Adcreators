import React from "react";
import "./PricingPage.style.scss";
import PricingContent from "../../../components/PricingContent/PricingContent";

const PricingPage = () => {
  return (
    <div className="pricing">
      <h2 className="pricing__title custom-title">Pricing</h2>
      <PricingContent />
    </div>
  );
};

export default PricingPage;
