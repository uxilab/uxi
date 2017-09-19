import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './components/pages/Home';
import ButtonPage from './components/pages/Button/Page';
import FontPage from './components/pages/Font/Page';

const AppRoutes = (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/Font" exact component={FontPage} />
    <Route path="/button" component={ButtonPage} />
  </Switch>
);

export default AppRoutes;
