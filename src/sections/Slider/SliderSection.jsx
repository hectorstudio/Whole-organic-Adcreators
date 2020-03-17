import React, { useEffect, useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import { NavLink } from 'react-router-dom';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import axios from 'axios';
import './SliderSection.style.scss';

const SliderSection = () => {
  const [sliderData, setSliderData] = useState([]);

  let slidercontent = sliderData.map(item => {
    return (
      <img
        src={item.img}
        alt="slider-img"
        key={item.id}
        className="slider__img"
      />
    );
  });

  useEffect(() => {
    axios.get(`/json/getSliderInfo.json`).then(res => setSliderData(res.data.sliderInfo));
  }, []);

  return (
    <div className="slider-container">
      <Carousel
        emulateTouch={true}
        showThumbs={false}
        showStatus={false}
        showArrows={true}
        className="slider"
      >
        {slidercontent}
      </Carousel>
      <h1 className="dropdown-item__title">ORGANICS AT YOUR FINGERTIPS</h1>
      <NavLink to="#" className="dropdown-item__link">
        Start shopping
      </NavLink>
    </div>
  );
};

export default SliderSection;
