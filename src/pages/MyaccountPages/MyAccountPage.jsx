import React, {useState, Fragment} from "react";
import { Switch, Route, useLocation } from 'react-router-dom'

import "./MyAccountPage.scss";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import AccountMenu from "../../components/Header/AccountMenu";
import MyProfilePage from "../../pages/MyaccountPages/MyProfilePage/MyProfilePage"
import FavourtesPage from "../../pages/MyaccountPages/FavouritesPage/FavouritesPage"
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
    component: MyProfilePage
  },
  {
    id: '4',
    path: '/my-account/recentview',
    exact: true,
    title: 'Recently viewed',
    component: MyProfilePage
  },
  {
    id: '5',
    path: '/my-account/messages',
    exact: true,
    title: 'Messages',
    component: MyProfilePage
  },
]



const MyAccountPage =() => {
  const [address, setAddress] = useState([])

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