import React, { useEffect } from 'react';
import './TotalProductsSection.style.scss';
import axios from 'axios';
import SectionItemsContainer from '../../components/ProductsStack/SectionItemsContainer';

const RecommendedSection = ({
  recommendedData,
  setRecommendedData
}) => {
  useEffect(() => {
    axios
      .get(`/json/getRecommended.json`)
      .then(res => setRecommendedData(res.data.recommended));
  }, [setRecommendedData]);

  return (
    <div className="products-container">
      <SectionItemsContainer sectionData={recommendedData} />
    </div>
  );
};

export default RecommendedSection;
