import React from 'react';
import { render } from 'react-dom';
import { Router } from 'react-router-dom';

import AppRoutes from './AppRoutes';
import AppShell from './AppShell';
import createBrowserHistory  from 'history/createBrowserHistory';

window.React = React;

render(
  <Router
    history={createBrowserHistory()}
  >
    <AppShell>
      {AppRoutes}
    </AppShell>
  </Router>,
  document.getElementById('app')
);
