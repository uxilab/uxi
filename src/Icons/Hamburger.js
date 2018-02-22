import React from 'react';
import PropTypes from 'prop-types';
import SvgIcon from '../SvgIcon';
/* eslint-disable max-len */

const Hamburger = props => (
  <SvgIcon {...props}>
    <svg
      width="24px"
      height="24px"
      viewBox="0 0 24 24"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlns="http://www.w3.org/1999/xlink"
      width="24px"
      height="24px"
    >
      <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g fill="#6D6C71">
          <rect x="2" y="4" width="20" height="2" />

          <rect x="2" y="11" width="20" height="2" />

          <rect x="2" y="18" width="20" height="2" />
        </g>
      </g>
    </svg>
  </SvgIcon>
);

Hamburger.propTypes = {
  color: PropTypes.string,
};

Hamburger.defaultProps = {
  color: '#6d6d71',
};

export default Hamburger;
