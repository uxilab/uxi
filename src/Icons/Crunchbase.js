import React from 'react';
import PropTypes from 'prop-types';
import SvgIcon from '../SvgIcon';
/* eslint-disable max-len */

const Crunchbase = props => (
  <SvgIcon {...props}>
    <svg focusable="false"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      width="24px"
      height="24px"
    >
      <g id="Layer_2" data-name="Layer 2">
        <g id="Layer_1-2" data-name="Layer 1">
          <circle cx="10.91" cy="9.23" r="1.64" />
          <path d="M8,0a8,8,0,1,0,8,8A8,8,0,0,0,8,0ZM5.09,10.86a1.64,1.64,0,0,0,1.49-1H7.63a2.63,2.63,0,1,1,0-1.28h-1a1.64,1.64,0,1,0-1.51,2.26Zm5.83,1a2.62,2.62,0,0,1-1.64-.57v.35h-1V4.14h1v3a2.63,2.63,0,1,1,1.64,4.69Z" />
        </g>
      </g>
    </svg>
  </SvgIcon>
);

Crunchbase.propTypes = {
  color: PropTypes.string,
};

Crunchbase.defaultProps = {
  color: '#6d6d71',
};

export default Crunchbase;
