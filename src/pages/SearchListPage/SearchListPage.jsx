import React from 'react'
import './SearchListPage.scss'
import SearchContainer from '../../sections/Search/SearchContainer'
import BreadCrumbs from '../../components/Breadcrumbs/Breadcrumbs'
const SearchListPage = () => {
  const breadCrumbs = [
    {
      id: '1',
      title: 'Home',
      path: '/',
      active: ''
    },
    {
      id: '2',
      title: 'Sun care',
      active: ''
    },
    {
      id: '3',
      title: '8376 products',
      active: 'active'
    }
  ]
  return (
    <div className="search-list">
      <div className="search-container-wrapper">
        <SearchContainer />
      </div>
      <BreadCrumbs breadcrumbsItems={breadCrumbs} />
    </div>
  )
}

export default SearchListPage