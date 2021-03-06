import React from 'react';
import PropTypes from 'prop-types';
import SvgIcon from '../SvgIcon';
/* eslint-disable max-len */

const Keepintheloop = props => (
  <SvgIcon {...props}>
    <svg
      focusable="false"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 18.47 16"
      width="24px"
      height="24px"
    >
      <g id="Layer_2" data-name="Layer 2">
        <g id="Layer_1-2" data-name="Layer 1">
          <path d="M13,0a5.43,5.43,0,1,0,5.43,5.43A5.43,5.43,0,0,0,13,0Zm4.24,5.43A4.24,4.24,0,1,1,13,1.19,4.24,4.24,0,0,1,17.28,5.43Z" />
          <rect x="12.56" y="4.6" width="0.95" height="3.34" />
          <rect x="12.56" y="2.91" width="0.95" height="0.94" />
          <path d="M13,11.47v.62H6.26L4.33,13.54V12.09H1.44V3.42H7.23V2H1.44A1.44,1.44,0,0,0,0,3.42v8.67a1.44,1.44,0,0,0,1.44,1.44H2.89v2a.43.43,0,0,0,.68.34l3.17-2.38H13a1.44,1.44,0,0,0,1.44-1.44v-.62Z" />
        </g>
      </g>
    </svg>
  </SvgIcon>
);

Keepintheloop.propTypes = {
  color: PropTypes.string,
};

Keepintheloop.defaultProps = {
  color: 'currentColor',
};

export default Keepintheloop;
