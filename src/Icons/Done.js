import React from 'react';
import PropTypes from 'prop-types';
import SvgIcon from '../SvgIcon';
/* eslint-disable max-len */

const Done = props => (
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
          <polygon points="7.48 8.82 5.41 6.75 4.3 7.87 7.48 11.05 12.46 6.07 11.35 4.95 7.48 8.82" />
        </g>
      </g>
    </svg>
  </SvgIcon>
);

Done.propTypes = {
  color: PropTypes.string,
};

Done.defaultProps = {
  color: 'currentColor',
};

export default Done;
