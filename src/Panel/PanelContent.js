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

PanelContent.defaultProps = {
  children: null,
  style: {},
};

export default PanelContent;
