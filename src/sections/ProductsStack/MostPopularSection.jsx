import React, { useEffect } from "react";
import axios from "axios";
import SectionItemsContainer from "../../components/Products/ProductsStack/SectionItemsContainer";
import Head from "../../components/Products/ProductsStack/Head";
import "./MostPopularSection.style.scss";

const MostPopularSection = ({
  mostPopularTitle,
  mostPopularData,
  setMostPopularData
}) => {
  useEffect(() => {
    axios
      .get(`/json/getMostPopular.json`)
      .then(res => setMostPopularData(res.data.mostPopular));
  }, [setMostPopularData]);

  return (
    <div className="most-popular-container">
      <Head title={mostPopularTitle} />
      <SectionItemsContainer sectionData={mostPopularData} />
    </div>
  );
};

export default MostPopularSection;
