import React from 'react';
import { AppLayout } from '../Layout'

const Panel = ({ children, style }) => (
  <AppLayout style={style}>
    {children}
  </AppLayout>
);

Panel.displayName = 'Panel';

export default Panel
