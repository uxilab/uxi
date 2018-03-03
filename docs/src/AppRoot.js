import React from 'react';
import { Router } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import AppRoutes from './AppRoutes';
import AppShell from './AppShell';
import Menu from './Menu'

export const AppRoot = props => {
  return (
    <Router
      history={createBrowserHistory()}
    >
      <AppShell>
        {/* <Menu /> */}
        {AppRoutes}
      </AppShell>
    </Router>
  )
}

export default AppRoot;
