import React from 'react';
import PropTypes from 'prop-types';
import SvgIcon from '../SvgIcon';
/* eslint-disable max-len */

const Deployment = props => (
  <SvgIcon {...props}>
    <svg focusable="false"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 15.79 15.75"
      width="24px"
      height="24px"
    >
      <g id="Layer_2" data-name="Layer 2">
        <g id="Layer_1-2" data-name="Layer 1">
          <polygon points="15.79 5.13 15.79 5.13 15.79 5.13 15.79 5.13" />
          <path d="M.67,15.75h14.4a.68.68,0,0,0,.67-.67V5.46a.67.67,0,0,0,0-.23l0,0,0-.06,0,0L12.44.3a.67.67,0,0,0-.56-.3h-8a.67.67,0,0,0-.56.3L.11,5.1l0,0,0,0,0,.05a.68.68,0,0,0,0,.23v9.61A.68.68,0,0,0,.67,15.75ZM8.55,1.35h3l2.3,3.45H8.55Zm-4.31,0h3V4.8H1.94ZM1.35,6.15h13V14.4h-13Z" />
        </g>
      </g>
    </svg>
  </SvgIcon>
);

Deployment.propTypes = {
  color: PropTypes.string,
};

Deployment.defaultProps = {
  color: '#6d6d71',
};

export default Deployment;
