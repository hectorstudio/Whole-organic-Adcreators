import React from 'react';
import SideBlocksItemContainer from './SideBlocksItemContainer';
import './SideBlocks.style.scss';

const items = [
  {
    id: '1',
    slug: ['login', 'register']
  },
  {
    id: '2',
    slug: 'cart'
  },
  {
    id: '3',
    slug: 'post'
  }
];

const SideBlocks = () => {
  return (
    <div className="side-container">
      <ul className="side-container-list">
        {items.map(item => {
          return <SideBlocksItemContainer key={item.id} slug={item.slug} />;
        })}
      </ul>
    </div>
  );
};

export default SideBlocks;
