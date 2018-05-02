import React from 'react';
import { render } from 'react-dom';
import { Router, Route } from 'react-router-dom';

import AppRoutes from './AppRoutes';
import AppShell from './AppShell';
import createBrowserHistory from 'history/createBrowserHistory';
import Menu from './Menu';

import GetStarted from './GetStarted'
import Landing from './Landing'

window.React = React;

render(
  <Router
    history={createBrowserHistory()}
  >
    <AppShell>
      <Route exact path="/" component={Landing} />
      <Route exact path="/get-started" component={GetStarted} />
      {/* <Menu /> */}
      {AppRoutes}
    </AppShell>
  </Router>,
  document.getElementById('app'),
);
