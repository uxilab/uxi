import React from 'react';
import { Style } from 'radium';
import LayoutObject from './Layout.style';

const Layout = ({ children, style = {} }) => {
  const className = 'uxi_container';

  return (
    <div style={style} className={className}>
      <Style rules={LayoutObject} />
      {children}
    </div>
  );
};

export default Layout;
