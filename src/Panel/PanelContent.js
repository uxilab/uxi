import React from 'react';

const PanelContent = ({ children, style }) => (
  <div style={style} >
    {children}
  </div>
)

PanelContent.displayName = 'PanelContent';

export default PanelContent
