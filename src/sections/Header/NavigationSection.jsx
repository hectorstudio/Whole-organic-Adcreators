import React, { useEffect, useState } from 'react';
import MenuItems from '../../components/Header/MenuItems';
import SubMenuItem from '../../components/Header/SubMenuItem';
import './NavigationSection.scss';
import { Vortex } from 'react-burgers';
import axios from 'axios';
import PropTypes from 'prop-types';

const menuItems = [
  {
    title: 'All Categories',
    id: '1'
  },
  {
    title: 'Home',
    id: '2',
    path: '/'
  },
  {
    title: 'About',
    id: '3',
    path: '/about'
  },
  {
    title: 'FAQs & Support',
    id: '4',
    path: '/faqs&support'
  },
  {
    title: 'Legal',
    id: '5',
    path: '/legal'
  },
  {
    title: 'For business',
    id: '6',
    path: '/business'
  },
  {
    title: 'Contact us',
    id: '7',
    path: '/contact'
  },
  {
    title: 'Burger',
    id: '8'
  }
];

const NavigationSection = ({ sizes }) => {
  const [active, setActiveBurger] = useState(false);
  const [DropMenuData, setDropMenuData] = useState([]);

  let menuItem = '';
  let wrapperMenuItem = '';

  if (sizes.width > 1120 && active) {
    menuItem = 'menu__item';
    wrapperMenuItem = 'wrapper-menu__item';
  } else if (!active) {
    menuItem = 'menu__item';
    wrapperMenuItem = 'wrapper-menu__item';
  } else {
    menuItem = 'menu__item show';
    wrapperMenuItem = 'wrapper-menu__item grow';
  }

  useEffect(() => {
    axios
      .get(`/json/getCategories.json`)
      .then(res => setDropMenuData(res.data.categories));
  }, [setDropMenuData]);

  return (
    <ul className="menu">
      <li className="menu-sub__item">
        {menuItems.map(item => {
          if (item.title !== 'Burger' && !item.path) {
            return (
              <SubMenuItem
                key={item.id}
                title={item.title}
                DropMenuData={DropMenuData}
                sizes={sizes}
              />
            );
          }
          else{
            return "";
          }
        })}
      </li>
      <li className={`${wrapperMenuItem}`}>
        <div className="menu__burger-item">
          {menuItems.map(item => {
            if (item.title === 'Burger') {
              return (
                <Vortex
                  key={item.id}
                  onClick={() => setActiveBurger(!active)}
                  active={active}
                />
              );
            }
            else{
              return "";
            }
          })}
        </div>
        <div className={`${menuItem}`}>
          {menuItems.map(item => {
            if (item.path) {
              return (
                <MenuItems
                  key={item.id}
                  path={item.path}
                  title={item.title}
                  setActiveBurger={setActiveBurger}
                />
              );
            }
            else {
              return "";
            }
          })}
        </div>
      </li>
    </ul>
  );
};

NavigationSection.propTypes = {
  sizes: PropTypes.object
};

export default NavigationSection;
