import React from 'react';
import { StaticRouter } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import AppRoutes from './AppRoutes';
import AppShell from './AppShell';

export const AppRootSSR = (props) => {
  const { url, context } = props;

  return (
    <StaticRouter
      location={url}
      context={{}}
    >
      <AppShell>
        {AppRoutes}
      </AppShell>
    </StaticRouter>
  )
}

export default AppRootSSR;
