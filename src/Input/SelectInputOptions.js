import React from 'react';
import Radium from 'radium';

const styles = {
  item: {
    cursor: 'pointer',
    padding: '2px 2px 2px 6px',
    background: 'white',
    ':hover': {
      background: '#f4f4f4',
    },
    ':active': {
      background: '#fff',
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
