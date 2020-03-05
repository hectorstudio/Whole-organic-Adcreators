import React, { useEffect, useState } from 'react';
import './FooterSection.scss';
import axios from 'axios';
import Categories from '../../components/Footer/Categories';
import Menu from '../../components/Footer/Menu';
import Social from '../../components/Footer/Social';

const footerLogo = require('../../images/footer-logo.png');

const FooterSection = () => {
  const [footerItems, setFooterItems] = useState([]);

  useEffect(() => {
    axios.get(`/json/getCategories.json`).then(res => setFooterItems(res.data.categories));
  }, [setFooterItems]);

  return (
    <footer className="footer">
      <img src={footerLogo} alt="footer-logo" className="footer__img" />
      <div className="container">
        <div className="footer-block">
          <Categories footerItems={footerItems} />
          <Menu />
          <Social />
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
