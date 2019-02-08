import React from 'react';
import PropTypes from 'prop-types';
import SvgIcon from '../SvgIcon';
/* eslint-disable max-len */

const Changes = props => (
  <SvgIcon {...props}>
    <svg
      focusable="false"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 12.33 15.74"
      width="24px"
      height="24px"
    >
      <g id="Layer_2" data-name="Layer 2">
        <g id="Layer_1-2" data-name="Layer 1">
          <path d="M3.62,4.79,2.25,3.42h4A4.8,4.8,0,0,1,11,8.21h1.3A6.09,6.09,0,0,0,6.24,2.12h-4L3.62.76,2.86,0,.09,2.77,2.86,5.55Z" />
          <path d="M8.68,11,10,12.31H6.09A4.79,4.79,0,0,1,1.3,7.53H0a6.09,6.09,0,0,0,6.09,6.08H10L8.68,15l.75.76L12.21,13,9.43,10.19Z" />
        </g>
      </g>
    </svg>
  </SvgIcon>
);

Changes.propTypes = {
  color: PropTypes.string,
};

Changes.defaultProps = {
  color: 'currentColor',
};

export default Changes;
