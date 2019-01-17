import React from 'react';
import PropTypes from 'prop-types';
import SvgIcon from '../SvgIcon';
/* eslint-disable max-len */

const Clock = props => (
  <SvgIcon {...props}>
    <svg
      focusable="false"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 17.4 17.4"
      width="24px"
      height="24px"
    >
      <g id="Layer_2" data-name="Layer 2">
        <g id="Layer_1-2" data-name="Layer 1">
          <path d="M8.7,0a8.7,8.7,0,1,0,8.7,8.7A8.71,8.71,0,0,0,8.7,0Zm0,16A7.3,7.3,0,1,1,16,8.7,7.31,7.31,0,0,1,8.7,16Z" />
          <path d="M13,8.38H10.3A1.7,1.7,0,0,0,9.14,7.31V4.2A.57.57,0,0,0,8,4.2V7.4a1.7,1.7,0,1,0,2.3,2.12H13a.57.57,0,1,0,0-1.14Z" />
        </g>
      </g>
    </svg>
  </SvgIcon>
);

Clock.propTypes = {
  color: PropTypes.string,
};

Clock.defaultProps = {
  color: 'currentColor',
};

export default Clock;
