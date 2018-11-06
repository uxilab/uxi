import React from 'react';
import { render } from 'react-dom';
import { Router, Route } from 'react-router-dom';
import ThemeProvider from 'uxi/Theme/ThemeProvider';
import ComponentRoutes from './ComponentRoutes';
import createBrowserHistory from 'history/createBrowserHistory';
import Menu from './Menu';
import AppShell from './AppShell';
import GetStarted from './GetStarted'
import Landing from './Landing'

window.React = React;

render(
  <ThemeProvider>
    <Router
      history={createBrowserHistory()}
    >
      <AppShell>
        <Route exact path="/" component={Landing} />
        <Route exact path="/get-started" component={GetStarted} />
        <Route path="/components" component={ComponentRoutes} />
      </AppShell>
    </Router>
  </ThemeProvider>,
  document.getElementById('app'),
);
