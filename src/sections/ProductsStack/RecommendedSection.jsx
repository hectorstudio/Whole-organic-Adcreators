import React, { useEffect } from "react";
import Head from "../../components/Products/ProductsStack/Head";
import "./RecommendedSection.style.scss";
import axios from "axios";
import SectionItemsContainer from "../../components/Products/ProductsStack/SectionItemsContainer";

const RecommendedSection = ({
  recommendedData,
  recommendedTitle,
  setRecommendedData
}) => {
  useEffect(() => {
    axios
      .get(`/json/getRecommended.json`)
      .then(res => setRecommendedData(res.data.recommended));
  }, [setRecommendedData]);

  return (
    <div className="recommended-container">
      <Head title={recommendedTitle} />
      <SectionItemsContainer sectionData={recommendedData} />
    </div>
  );
};

export default RecommendedSection;
