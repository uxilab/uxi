import React from 'react';
import PropTypes from 'prop-types';
import SvgIcon from '../SvgIcon';
/* eslint-disable max-len */

const Website2 = props => (
  <SvgIcon {...props}>
    <svg focusable="false"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      width="24px"
      height="24px"
    >
      <g id="Layer_2" data-name="Layer 2">
        <g id="Layer_1-2" data-name="Layer 1">
          <path d="M8,0a8,8,0,1,0,8,8A8,8,0,0,0,8,0ZM6.64,12.68H4.75a1.22,1.22,0,0,1-1.21-1.22V6.81h3.1Zm5.82-1.22a1.22,1.22,0,0,1-1.21,1.22H7.83V6.81h4.63Zm0-5.84H3.54V4.54A1.22,1.22,0,0,1,4.75,3.32h6.5a1.22,1.22,0,0,1,1.21,1.22Z" />
        </g>
      </g>
    </svg>
  </SvgIcon>
);

Website2.propTypes = {
  color: PropTypes.string,
};

Website2.defaultProps = {
  color: '#6d6d71',
};

export default Website2;
