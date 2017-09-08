import React from 'react';
import { Route, Redirect, IndexRoute } from 'react-router';
import Master from './components/Master';
import Home from './components/pages/Home';
import ButtonPage from './components/pages/Button/Page';

const AppRoutes = (
  <Route path="/" component={Master}>
    <IndexRoute component={Home}/>
    <Route path="home" component={Home}/>
    <Route path="components">
      <Route path="Button" component={ButtonPage}/>
    </Route>
  </Route>
);

export default AppRoutes;
