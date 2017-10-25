import React from 'react';
import PropTypes from 'prop-types';
import SvgIcon from '../SvgIcon';
/* eslint-disable max-len */

const Pinterest = props => (
  <SvgIcon {...props}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      width="24px"
      height="24px"
    >
      <g id="Layer_2" data-name="Layer 2">
        <g id="Layer_1-2" data-name="Layer 1">
          <path d="M8,0a8,8,0,1,0,8,8A8,8,0,0,0,8,0Zm.76,10.21A1.63,1.63,0,0,1,7.37,9.5S7,10.81,7,11.06a6.08,6.08,0,0,1-1,1.86.08.08,0,0,1-.14,0,6.38,6.38,0,0,1,0-2.16l.73-3.1a2.19,2.19,0,0,1-.18-.9c0-.84.49-1.47,1.1-1.47a.76.76,0,0,1,.77.85,12.21,12.21,0,0,1-.5,2,.88.88,0,0,0,.9,1.1c1.08,0,1.8-1.38,1.8-3A2.13,2.13,0,0,0,8.08,4a2.69,2.69,0,0,0-2.8,2.72,1.64,1.64,0,0,0,.38,1.12.28.28,0,0,1,.08.32l-.12.46a.2.2,0,0,1-.28.14A2.19,2.19,0,0,1,4.17,6.6,3.77,3.77,0,0,1,8.23,3a3.4,3.4,0,0,1,3.6,3.26C11.83,8.54,10.59,10.21,8.76,10.21Z" />
        </g>
      </g>
    </svg>
  </SvgIcon>
);

Pinterest.propTypes = {
  color: PropTypes.string
};

Pinterest.defaultProps = {
  color: '#6d6d71'
};

export default Pinterest;
