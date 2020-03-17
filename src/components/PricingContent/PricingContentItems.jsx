import React from "react";
import "./PricingContent.style.scss";
import PricingContentFooterList from "./PricingContentFooterList";

const PricingContentItems = ({ imgUrl, title, subtitle, contentList }) => {
  return (
    <div className="pricing-content-items">
      <div className="pricing-content-header">
        <img
          className="pricing-content-header__img"
          src={imgUrl}
          alt="pricing-header-logo"
        />
        <div className="pricing-content-header-text-block">
          <p className="pricing-content-header-text-block__title">{title}</p>
          <p className="pricing-content-header-text-block__subtitle">
            {subtitle}
          </p>
        </div>
      </div>
      <div className="pricing-content-footer">
        <PricingContentFooterList contentList={contentList} />
        <button className="pricing-content-footer__btn">Get Package</button>
      </div>
    </div>
  );
};

export default PricingContentItems;
