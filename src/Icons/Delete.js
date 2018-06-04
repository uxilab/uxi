import React from 'react';
import PropTypes from 'prop-types';
import SvgIcon from '../SvgIcon';
/* eslint-disable max-len */

const Delete = props => (
  <SvgIcon {...props}>
    <svg focusable="false"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 11.73 16"
      width="24px"
      height="24px"
    >
      <g id="Layer_2" data-name="Layer 2">
        <g id="Layer_1-2" data-name="Layer 1">
          <path d="M1.6,16h8.54a1.6,1.6,0,0,0,1.6-1.6V4.27H0V14.4A1.6,1.6,0,0,0,1.6,16ZM1.48,5.75h8.77v8.77H1.48Z" />
          <polygon points="0 3.19 11.73 3.19 11.73 1.71 8.31 1.71 8.31 0 3.42 0 3.42 1.71 0 1.71 0 3.19" />
          <rect x="3.42" y="7.69" width="1.48" height="4.9" />
          <rect x="6.83" y="7.69" width="1.48" height="4.9" />
        </g>
      </g>
    </svg>
  </SvgIcon>
);

Delete.propTypes = {
  color: PropTypes.string,
};

Delete.defaultProps = {
  color: '#6d6d71',
};

export default Delete;
