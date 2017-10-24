import React from 'react';
import { Style } from 'radium';
import LayoutObject from './Layout.style';

const Layout = ({ children, style = {} }) => (
  <div style={style}>
    <Style rules={LayoutObject} />
    {children}
  </div>
);

export default Layout;
