import React from 'react';
import { render } from 'react-dom';
import { Router, Route } from 'react-router-dom';
import UXISCThemeProvider from 'uxi/Theme/ThemeProvider/UXISCThemeProvider';
import ComponentRoutes from './ComponentRoutes';
import createBrowserHistory from 'history/createBrowserHistory';
import Menu from './Menu';
import AppShell from './AppShell';
import GetStarted from './GetStarted'
import Landing from './Landing'
import { ThemeProvider  } from 'styled-components';

window.React = React;

render(
  <UXISCThemeProvider>

  <Router
    history={createBrowserHistory()}
  >
    <AppShell>
      <Route exact path="/" component={Landing} />
      <Route exact path="/get-started" component={GetStarted} />
      <Route path="/components" component={ComponentRoutes} />
    </AppShell>
  </Router>
  </UXISCThemeProvider>,
  document.getElementById('app'),
);
