import React from 'react';

const PageWithMenu = ({ menu, children, style = {}, menuHeight = '300px' }) => (
  <div style={Object.assign(style, { display: 'flex' })}>
    <div style={{ width: menuHeight, height: '100hv' }}>
      {menu}
    </div>
    <div style={{ flex: 1 }}>
      {children}
    </div>
  </div>
);

export default PageWithMenu;
