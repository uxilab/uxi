import React from 'react';
import Radium from 'radium';

const styles = {
  item: {
    display: 'border-box',
    cursor: 'pointer',
    padding: '2px 2px 2px 6px',
    // minHeight: '32px',
    background: 'white',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
    userSelect: 'none',
    ':hover': {
      backgroundColor: '#f4f4f4',
    },
    ':active': {
      backgroundColor: '#fff',
    },
  },
};

const Options = ({ children, selected, style }) => (
  <div style={{ ...styles.item, ...style }}>
    {children}
  </div>
);

Options.displayName = 'Options';

export default Radium(Options);
