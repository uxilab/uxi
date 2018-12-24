import React from 'react';
import { AppLayout } from '../Layout';

const Panel = ({ children, style, onClose, rounded }) => (
  <AppLayout style={style}>
    {
      /* Pass Panel's onClose to its children */
      React.Children.map(children, child => (child &&
        React.cloneElement(
          child,
          {
            onClose,
            rounded,
            ...(child.props || {}), // allow consumer final overwrite privilege for onClose
          },
        )
      ))
    }
  </AppLayout>
);

Panel.displayName = 'Panel';

Panel.defaultProps = {
  rounded: false,
}

export default Panel;
