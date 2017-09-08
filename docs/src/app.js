import React from 'react';
import { render } from 'react-dom';
import { Router, useRouterHistory } from 'react-router';
import AppRoutes from './AppRoutes';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { createHashHistory } from 'history';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { IntlProvider } from 'react-intl';
import ThemeProvider from 'cluedin-ui/Theme';
import { StyleRoot } from 'radium';
import LayoutProvider from 'cluedin-ui/Layouts/LayoutProvider';
// Helpers for debugging
window.React = React;

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

const layoutList = [{
  code: 'TowColumns',
  isDefault: true,
  children: [
    {
      type: 'row',
      columns: [
        { size: 4, name: 'profile' },
        { size: 8, name: 'main' }
      ]
    }
  ]
}];

/**
 * Render the main app component. You can read more about the react-router here:
 * https://github.com/reactjs/react-router/blob/master/docs/guides/README.md
 */
render(
  <IntlProvider locale="en" messages={{}}>
    <ThemeProvider>
      <MuiThemeProvider>
        <StyleRoot>
          <LayoutProvider layouts={layoutList}>
            <Router
              history={useRouterHistory(createHashHistory)()}
              onUpdate={() => window.scrollTo(0, 0)}
            >
              {AppRoutes}

            </Router>
          </LayoutProvider>
        </StyleRoot>
      </MuiThemeProvider>
    </ThemeProvider>
  </IntlProvider>
  , document.getElementById('app'));
