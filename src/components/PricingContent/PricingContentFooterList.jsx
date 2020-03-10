import React from 'react'
import './PricingContent.scss'

const PricingContentFooterList = ({ contentList }) => {

  return (
    <ul className="pricing-content-footer-list">
      {
        contentList.map((item, index) => (
          <li className="pricing-content-footer-list__item" key={index}>{item.text}</li>
        ))
      }
    </ul>
  )
}

export default PricingContentFooterList