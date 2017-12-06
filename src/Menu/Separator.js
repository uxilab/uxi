import React from 'react';
import PropTypes from 'prop-types';

const styles = {
  main: {
    textAlign: 'center',
    color: '#3c3c3c',
    whiteSpace: 'nowrap',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textTransform: 'uppercase',
    fontSize: '.85em',
  },
  bar: {
    height: '1px',
    backgroundColor: '#909090',
    display: 'inline-block',
    width: '100%',
    margin: '1px 3px 0',
  },
};

/* eslint-disable indent */
/* eslint-disable react/jsx-indent */
const Separator = ({ label }) => (label && label !== ''
    ? (
        <div>
          <div style={styles.main}>
            <span style={styles.bar} />
            &nbsp;{label}&nbsp;
              <span style={styles.bar} />
          </div>
        </div>
      )
    : (
        <div>
          <div style={styles.main}>
            &nbsp;<span style={styles.bar} />&nbsp;
          </div>
        </div>
      )
);

export default Separator;
