import React from 'react';

const styles = {
  main: {
    // marginLeft: '-6px',
    textAlign: 'center',
    color: '#3c3c3c',
    whiteSpace: 'nowrap',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textTransform: 'uppercase',
    fontSize: '.85em',
    userSelect: 'none',
    lineHeight: 1,
  },
  bar: {
    height: '1px',
    backgroundColor: '#909090',
    display: 'inline-block',
    // width: 'calc(100% - 8px)', // 6 + 2
    width: '100%', // 6 + 2
    // margin: '1px 3px 0',
  },
};

/* eslint-disable indent */
/* eslint-disable react/jsx-indent */
const MlMenuSeparator = ({ label, style }) => (label && label !== ''
    ? (
        <li aria-hidden style={{ background: 'white', ...style }}>
          <div style={styles.main}>
            <span style={styles.bar} />
              &nbsp;{label}&nbsp;
            <span style={styles.bar} />
          </div>
        </li>
      )
    : (
        <li aria-hidden style={{ background: 'white', ...style }}>
          <div style={styles.main}>
            <span style={{ ...styles.bar, margin: '4px 0' }} />
          </div>
        </li>
      )
);

export default MlMenuSeparator;
