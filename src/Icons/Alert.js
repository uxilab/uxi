import React from 'react';
import PropTypes from 'prop-types';
import SvgIcon from '../SvgIcon';
/* eslint-disable max-len */

const Alert = props => (
  <SvgIcon {...props}>
    <svg
      focusable="false"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      width="24px"
      height="24px"
    >
      <g id="Layer_2" data-name="Layer 2">
        <g id="Layer_1-2" data-name="Layer 1">
          <path d="M8,0a8,8,0,1,0,8,8A8,8,0,0,0,8,0ZM8,14.6A6.6,6.6,0,1,1,14.6,8,6.61,6.61,0,0,1,8,14.6Z" />
          <rect x="7.28" y="6.76" width="1.44" height="5.04" />
          <rect x="7.28" y="4.2" width="1.44" height="1.42" />
        </g>
      </g>
    </svg>
  </SvgIcon>
);

Alert.propTypes = {
  color: PropTypes.string
};

Alert.defaultProps = {
  color: '#6d6d71'
};

export default Alert;
