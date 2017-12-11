import React from 'react';
import Radium from 'radium';

const styles = {
  item: {
    padding: '0 0 0 6px',
    background: 'white',
    ':hover': {
      background: '#f4f4f4',
    },
  },
};

const Options = ({ children }) => (
  <div style={styles.item}>
    {children}
  </div>
);

Options.displayName = 'Options';

export default Radium(Options);
