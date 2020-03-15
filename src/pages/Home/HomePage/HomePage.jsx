import React from "react";
import SliderSection from "../../sections/Slider/SliderSection";
import "./HomePage.scss";
import SearchContainer from "../../sections/Search/SearchContainer";
import RecommendedContainer from "../../sections/ProductsStack/RecommendedContainer";
import MostPopularContainer from "../../sections/ProductsStack/MostPopularContainer";
import DoNotMissContainer from "../../sections/ProductsStack/DoNotMissContainer";

const HomePage = () => {
  return (
    <div className="home-page">
      <SliderSection />
      <SearchContainer />
      <RecommendedContainer />
      <MostPopularContainer />
      <DoNotMissContainer />
    </div>
  );
};

export default HomePage;
