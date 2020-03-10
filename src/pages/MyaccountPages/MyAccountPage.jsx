import React, {useState} from "react";
import { Switch, Route, useLocation } from 'react-router-dom'

import "./MyAccountPage.scss";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import AccountMenu from "../../components/Header/AccountMenu";
import MyProfilePage from "../../pages/MyaccountPages/MyProfilePage/MyProfilePage"
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
    component: MyProfilePage
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

const breadCrumbs = [
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

const MyAccountPage = () => {
  const [address, setAddress] = useState([])

  const location = useLocation();
  
  
  return (
      <div className="container">
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
      </div>
  );
};

export default MyAccountPage;