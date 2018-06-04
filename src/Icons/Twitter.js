import React from 'react';
import PropTypes from 'prop-types';
import SvgIcon from '../SvgIcon';
/* eslint-disable max-len */

const Twitter = props => (
  <SvgIcon {...props}>
    <svg focusable="false"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      width="24px"
      height="24px"
    >
      <g id="Layer_2" data-name="Layer 2">
        <g id="Layer_1-2" data-name="Layer 1">
          <path d="M8,0a8,8,0,1,0,8,8A8,8,0,0,0,8,0Zm3.79,6.06q0,.13,0,.25A5.56,5.56,0,0,1,3.24,11l.47,0a3.92,3.92,0,0,0,2.43-.84A2,2,0,0,1,4.31,8.83a1.92,1.92,0,0,0,.37,0,2,2,0,0,0,.51-.07A2,2,0,0,1,3.62,6.88v0a2,2,0,0,0,.89.24,2,2,0,0,1-.6-2.61,5.55,5.55,0,0,0,4,2,2,2,0,0,1,3.33-1.78,3.91,3.91,0,0,0,1.24-.47,2,2,0,0,1-.86,1.08A3.88,3.88,0,0,0,12.76,5,4,4,0,0,1,11.79,6.06Z" />
        </g>
      </g>
    </svg>
  </SvgIcon>
);

Twitter.propTypes = {
  color: PropTypes.string,
};

Twitter.defaultProps = {
  color: '#6d6d71',
};

export default Twitter;
