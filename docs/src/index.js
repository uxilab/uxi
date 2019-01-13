import React from 'react';
import { Provider } from 'react-redux';
import { render } from 'react-dom';
import { Router, Route } from 'react-router-dom';
import ThemeProvider from 'uxi/Theme/ThemeProvider';
import About from './components/pages/Home';
import ComponentRoutes from './ComponentRoutes';
import createBrowserHistory from 'history/createBrowserHistory';
import Menu from './Menu';
import AppShell from './AppShell';
import GetStarted from './GetStarted';
import Landing from './Landing';
import { ConnectedRouter } from 'connected-react-router';
import { store, history } from './configureStore';
// import ThemeProviderDynamic from './ThemeProviderDynamic'

window.React = React;

render(
  <Provider store={store} >
    <ConnectedRouter
      history={history}
    >
      <AppShell>
        <Route exact path="/" component={Landing} />
        <Route exact path="/get-started" component={GetStarted} />
        <Route path="/components" component={ComponentRoutes} />
        <Route path="/about" component={About} />
      </AppShell>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('app'),
);
