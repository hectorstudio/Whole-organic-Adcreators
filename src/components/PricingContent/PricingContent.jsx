import React from "react";
import "./PricingContent.style.scss";
import PricingContentItems from "./PricingContentItems";

const PricingContent = () => {
  const contentItems = [
    {
      imgUrl: "/images/favicons/price-logo.jpg",
      title: "Testtitle1",
      subtitle: "subtitle1",
      contentList: [
        {
          id: "1",
          text: "sadfasdf"
        },
        {
          id: "2",
          text: "sdsfdsadfasdf"
        }
      ]
    },
    {
      imgUrl: "/images/favicons/price-logo.jpg",
      title: "Testtitle2",
      subtitle: "subtitle2",
      contentList: [
        {
          id: "1",
          text: "sadfasdf"
        },
        {
          id: "2",
          text: "sdsfdsadfasdf"
        }
      ]
    },
    {
      imgUrl: "/images/favicons/price-logo.jpg",
      title: "Testtitle3",
      subtitle: "subtitle3",
      contentList: [
        {
          id: "1",
          text: "sadfasdf"
        },
        {
          id: "2",
          text: "sdsfdsadfasdf"
        }
      ]
    },
    {
      imgUrl: "/images/favicons/price-logo.jpg",
      title: "Testtitle4",
      subtitle: "subtitle4",
      contentList: [
        {
          id: "1",
          text: "sadfasdf"
        },
        {
          id: "2",
          text: "sdsfdsadfasdf"
        }
      ]
    }
  ];

  return (
    <div className="pricing-content">
      {contentItems.map( (item, index) => (
        <PricingContentItems
          key={index}
          imgUrl={item.imgUrl}
          title={item.title}
          subtitle={item.subtitle}
          contentList={item.contentList}
        />
      ))}
    </div>
  );
};

export default PricingContent;
