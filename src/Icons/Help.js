import React, { PropTypes } from 'react';
import SvgIcon from '../SvgIcon';
/* eslint-disable max-len */

const Help = props => (
  <SvgIcon {...props}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      width="24px"
      height="24px"
    >
      <g id="Layer_2" data-name="Layer 2">
        <g id="Layer_1-2" data-name="Layer 1">
          <path d="M8,0a8,8,0,1,0,8,8A8,8,0,0,0,8,0ZM8,14.6A6.6,6.6,0,1,1,14.6,8,6.61,6.61,0,0,1,8,14.6Z" />
          <path d="M8.53,10.44H7.08V8.26h.72a1.61,1.61,0,1,0-1.34-2.5L5.26,5A3.05,3.05,0,1,1,8.53,9.62Z" />
          <rect x="7.07" y="11.04" width="1.44" height="1.27" />
        </g>
      </g>
    </svg>
  </SvgIcon>
);

Help.propTypes = {
  color: PropTypes.string
};

Help.defaultProps = {
  color: '#6d6d71'
};

export default Help;
