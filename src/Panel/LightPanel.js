import React from 'react';
import { AppLayout } from '../Layout';

const LightPanel = ({ children, style, onClose }) => (
  <AppLayout style={{ background: 'white', ...style }}>
    {
      /* Pass LightPanel's onClose to its children */
      React.Children.map(children, child => (
        React.cloneElement(
          child,
          { onClose, ...child.props }, // allow user overwrite
        )
      ))
    }
  </AppLayout>
);

LightPanel.displayName = 'LightPanel';

export default LightPanel;
