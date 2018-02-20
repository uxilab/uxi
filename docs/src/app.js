import React from 'react';
import { render } from 'react-dom';
import { Router } from 'react-router-dom';

import AppRoutes from './AppRoutes';
import AppShell from './AppShell';
import createBrowserHistory from 'history/createBrowserHistory';
import Menu from './Menu'

window.React = React;

render(
  <Router
    history={createBrowserHistory()}
  >
    <AppShell>
      {/* <Menu /> */}
      {AppRoutes}
    </AppShell>
  </Router>,
  document.getElementById('app'),
);
