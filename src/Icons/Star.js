import React from 'react';
import PropTypes from 'prop-types';
import SvgIcon from '../SvgIcon';
/* eslint-disable max-len */

const Star = props => (
  <SvgIcon {...props}>
    <svg
      focusable="false"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 17.3 17.3"
      width="24px"
      height="24px"
    >
      <g id="Layer_2" data-name="Layer 2">
        <g id="Layer_1-2" data-name="Layer 1">
          <path d="M14.36,17.3a.63.63,0,0,1-.35-.11L8.65,13.65,3.29,17.19a.65.65,0,0,1-1-.8l2.47-5.67L.23,6.86A.65.65,0,0,1,0,6.14a.66.66,0,0,1,.61-.43H5.92L8.05.41A.64.64,0,0,1,8.65,0h0a.64.64,0,0,1,.6.41l2.13,5.3h5.27a.66.66,0,0,1,.61.43.65.65,0,0,1-.19.72l-4.58,3.86L15,16.39a.66.66,0,0,1-.18.76A.66.66,0,0,1,14.36,17.3ZM8.65,12.22a.61.61,0,0,1,.36.11l3.88,2.57-1.78-4.1a.65.65,0,0,1,.18-.76l3.58-3H10.94a.67.67,0,0,1-.61-.41L8.65,2.4,7,6.61A.67.67,0,0,1,6.36,7H2.43L6,10a.65.65,0,0,1,.18.76L4.41,14.9l3.88-2.57A.59.59,0,0,1,8.65,12.22Z" />
        </g>
      </g>
    </svg>
  </SvgIcon>
);

Star.propTypes = {
  color: PropTypes.string
};

Star.defaultProps = {
  color: '#6d6d71'
};

export default Star;
