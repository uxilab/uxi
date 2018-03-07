import React from 'react';
import { render } from 'react-dom';

import AppRoot from './AppRoot'

window.React = React;

render(
  <AppRoot />,
  document.getElementById('app'),
);
