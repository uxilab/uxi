import React from 'react';
import PropTypes from 'prop-types';
import SvgIcon from '../SvgIcon';
/* eslint-disable max-len */

const Directoryopen = props => (
  <SvgIcon {...props}>
    <svg
      focusable="false"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 19.26 13.84"
      width="24px"
      height="24px"
    >
      <g id="Layer_2" data-name="Layer 2">
        <g id="Layer_1-2" data-name="Layer 1">
          <path d="M19,3a1.41,1.41,0,0,0-1.16-.61H7.91L6.6.66A1.65,1.65,0,0,0,5.29,0H1.64A1.65,1.65,0,0,0,0,1.64V12.18a1.64,1.64,0,0,0,1.63,1.64h0l12.87,0a1.4,1.4,0,0,0,1.31-.9l3.35-8.61A1.42,1.42,0,0,0,19,3ZM5,2.4a1.42,1.42,0,0,0-1.32.93l-2,5.49V1.67H5.28l.55.74ZM17.65,3.94l-3.19,8.21H2.1l3-8.2Z" />
        </g>
      </g>
    </svg>
  </SvgIcon>
);

Directoryopen.propTypes = {
  color: PropTypes.string,
};

Directoryopen.defaultProps = {
  color: 'currentColor',
};

export default Directoryopen;
