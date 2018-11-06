import React from 'react';

const PanelContent = ({ children, style }) => (
  <div
    style={{
      position: 'relative',
      ...style,
    }}
  >
    {children}
  </div>
);

PanelContent.displayName = 'PanelContent';

export default PanelContent;
