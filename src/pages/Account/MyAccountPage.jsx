import React, { Fragment } from "react";
import { Switch, Route, useLocation } from 'react-router-dom'

import "./MyAccountPage.scss";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import AccountMenu from "../../components/Header/AccountMenu";
import MyProfilePage from "../../pages/Account/MyProfilePage/MyProfilePage"
import FavourtesPage from "../../pages/Account/FavouritesPage/FavouritesPage"
import MyAdsPage from "../../pages/Account/MyAdsPage/MyAdsPage"
import RecentlyViewedPage from "../../pages/Account/RecentlyViewedPage/RecentlyViewedPage"
import PricingPage from "../../pages/Account/PricingPage/PricingPage"
//import ReactFileReader from "react-file-reader";

const routes = [
  {
    id: '1',
    path: '/my-account/my-profile',
    exact: true,
    title: 'My profile',
    component: MyProfilePage
  },
  {
    id: '2',
    path: '/my-account/favourites',
    exact: true,
    title: 'Favourites',
    component: FavourtesPage
  },
  {
    id: '3',
    path: '/my-account/my-ads',
    exact: true,
    title: 'My ads',
    component: MyAdsPage
  },
  {
    id: '4',
    path: '/my-account/recently-viewed',
    exact: true,
    title: 'Recently viewed',
    component: RecentlyViewedPage
  },
  {
    id: '5',
    path: '/my-account/messages',
    exact: true,
    title: 'Messages',
    component: MyProfilePage
  },
  {
    id: '6',
    path: '/my-account/pricing',
    exact: true,
    title: 'Pricing',
    component: PricingPage
  },
]



const MyAccountPage =() => {
//  const [address, setAddress] = useState([])

  const location = useLocation();
  const selectedCrumb = routes.find(route => route.path === location.pathname);

  
  const breadCrumbs = selectedCrumb ? [
    {
      id: '1',
      title: 'Home',
      path: '/',
      active: ""
    },
    {
      id: '2',
      title: 'My account',
      path: '/my-account',
      active: ""
    },
    {
      id: '3',
      title: selectedCrumb.title,
      path: selectedCrumb.path,
      active: "active"
    }
  ] : [
    {
      id: '1',
      title: 'Home',
      path: '/',
      active: ""
    },
    {
      id: '2',
      title: 'My account',
      path: '/my-account',
      active: "active"
    }
  ]

  return (
      <Fragment>
        <Breadcrumbs breadcrumbsItems={breadCrumbs} />
        <div className="my-account">
          <AccountMenu routes={routes} />
          <div className="account-content">
            <Switch>
              {routes.map(item => (
                <Route
                  key={item.id}
                  path={item.path}
                  exact={item.exact}
                  title={item.title}
                  children={<item.component />}
                />
              ))}
            </Switch>
          </div>
        </div>
      </Fragment>
  );
};

export default MyAccountPage;