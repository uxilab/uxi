import React from 'react';
import PropTypes from 'prop-types';
import SvgIcon from '../SvgIcon';
/* eslint-disable max-len */

const Visibilityunabled = props => (
  <SvgIcon {...props}>
    <svg focusable="false"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 17.62 11.35"
      width="24px"
      height="24px"
    >
      <g id="Layer_2" data-name="Layer 2">
        <g id="Layer_1-2" data-name="Layer 1">
          <rect
            x="8.31"
            y="-1.94"
            width="1"
            height="15.23"
            transform="translate(-1.4 8.02) rotate(-45.73)"
          />
          <path d="M8.75,7.71a2,2,0,0,1-2-1.92l-.9-.88a2.86,2.86,0,0,0-.11.76,3,3,0,0,0,3,3,2.87,2.87,0,0,0,.83-.13Z" />
          <path d="M17.42,5.32a10,10,0,0,0-8.61-5A9.7,9.7,0,0,0,6,.79L7.14,1.95a8.11,8.11,0,0,1,1.67-.2A8.58,8.58,0,0,1,16,5.67a8.54,8.54,0,0,1-2.48,2.48l1,1A9.89,9.89,0,0,0,17.41,6l.2-.35Z" />
          <path d="M10.48,9.4a8.11,8.11,0,0,1-1.67.2A8.58,8.58,0,0,1,1.63,5.67,8.54,8.54,0,0,1,4.11,3.19l-1-1A9.89,9.89,0,0,0,.2,5.32L0,5.67.2,6a10,10,0,0,0,8.61,5,9.69,9.69,0,0,0,2.86-.44Z" />
          <path d="M8.87,3.64a2,2,0,0,1,2,1.92l.9.88a2.85,2.85,0,0,0,.11-.76,3,3,0,0,0-3-3A2.86,2.86,0,0,0,8,2.77Z" />
        </g>
      </g>
    </svg>
  </SvgIcon>
);

Visibilityunabled.propTypes = {
  color: PropTypes.string,
};

Visibilityunabled.defaultProps = {
  color: '#6d6d71',
};

export default Visibilityunabled;
