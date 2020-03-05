import React, { useEffect } from 'react';
import Logo from '../../components/Header/Logo';
import SideBlocks from '../../components/Header/SideBlocks';
import './HeaderSection.scss';
import axios from 'axios';

export const HeaderSection = ({ setCountValue }) => {
  useEffect(() => {
    axios
      .get(`/json/getUserInfo.json`)
      .then(res => setCountValue(res.data.cartCount));
  }, [setCountValue]);

  return (
    <div className="logo-side-container">
      <Logo />
      <SideBlocks />
    </div>
  );
};
