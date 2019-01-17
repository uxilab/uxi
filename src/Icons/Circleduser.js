import React from 'react';
import PropTypes from 'prop-types';
import SvgIcon from '../SvgIcon';
/* eslint-disable max-len */

const Circleduser = props => (
  <SvgIcon {...props}>
    <svg
      focusable="false"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 36.94 36.94"
      width="24px"
      height="24px"
    >
      <g id="Layer_2" data-name="Layer 2">
        <g id="Layer_1-2" data-name="Layer 1">
          <circle cx="18.47" cy="18.47" r="17.97" />
          <path d="M18.47,8.27a4.46,4.46,0,1,0,4.46,4.46A4.46,4.46,0,0,0,18.47,8.27Zm0,7.35a2.9,2.9,0,1,1,2.9-2.89A2.9,2.9,0,0,1,18.47,15.62Z" />
          <path d="M18.47,18.64c-5,0-8.48,2.57-8.48,6.26v1.83H27V24.9C27,21.21,23.46,18.64,18.47,18.64Zm7,6.65H11.43V24.9c0-2.84,2.9-4.82,7-4.82s7,2,7,4.82Z" />
        </g>
      </g>
    </svg>
  </SvgIcon>
);

Circleduser.propTypes = {
  color: PropTypes.string,
};

Circleduser.defaultProps = {
  color: 'currentColor',
};

export default Circleduser;
