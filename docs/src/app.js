import React from 'react';
import { render } from 'react-dom';
import { Router, Route } from 'react-router-dom';

import ComponentRoutes from './ComponentRoutes';
import createBrowserHistory from 'history/createBrowserHistory';
import Menu from './Menu';
import Appshell from './Appshell';
import GetStarted from './GetStarted'
import Landing from './Landing'

window.React = React;

render(
  <Router
    history={createBrowserHistory()}
  >
    <Appshell>
      <Route exact path="/" component={Landing} />
      <Route exact path="/get-started" component={GetStarted} />
      <Route path="/components" component={ComponentRoutes} />

    </Appshell>
  </Router>,
  document.getElementById('app'),
);
