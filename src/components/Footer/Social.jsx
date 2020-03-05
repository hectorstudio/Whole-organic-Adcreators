import React from 'react';
import './Social.scss';

const socialItem = [
  {
    id: '1',
    icon: 'icon-facebook',
    path: 'https://www.facebook.com/'
  },
  {
    id: '2',
    icon: 'icon-instagram',
    path: 'https://www.instagram.com/'
  },
  {
    id: '3',
    icon: 'icon-linkedin',
    path: 'https://www.linkedin.com/'
  }
];

const Social = () => {
  return (
    <ul className="footer-social-list">
      {socialItem.map(item => {
        return (
          <li className="footer-social__item" key={item.id}>
            <a
              href={item.path}
              className="footer-social__link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className={item.icon} />
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default Social;
