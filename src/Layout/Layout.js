import React from 'react';
import LayoutObject from './Layout.style';

const Layout = ({ children, style = {} }) => (
  <div style={style}>
    {children}
  </div>
);

export default Layout;
