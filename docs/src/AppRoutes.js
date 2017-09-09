import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './components/pages/Home';
import ButtonPage from './components/pages/Button/Page';

const AppRoutes = (
  <Switch>
    <Route path="/" exact component={Home}/>
    <Route path="/button" component={ButtonPage}/>
  </Switch>
);

export default AppRoutes;
