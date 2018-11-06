import React from 'react';
import { AppLayout } from '../Layout';

const Panel = ({ children, style, onClose }) => (
  <AppLayout style={style}>
    {
      /* Pass Panel's onClose to its children */
      React.Children.map(children, child => (child &&
        React.cloneElement(
          child,
          { onClose, ...(child.props || {}) }, // allow user overwrite
        )
      ))
    }
  </AppLayout>
);

Panel.displayName = 'Panel';

export default Panel;
