import React from 'react';
import PropTypes from 'prop-types';
import SvgIcon from '../SvgIcon';
/* eslint-disable max-len */

const Patterns = props => (
  <SvgIcon {...props}>
    <svg
      focusable="false"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 19.3 19.3"
      width="24px"
      height="24px"
    >
      <g id="Layer_2" data-name="Layer 2">
        <g id="Layer_1-2" data-name="Layer 1">
          <path d="M9.65,19.3a.63.63,0,0,1-.46-.19L5.73,15.65a.66.66,0,0,1,0-.92l3.46-3.46a.68.68,0,0,1,.92,0l3.46,3.46a.66.66,0,0,1,.19.46.64.64,0,0,1-.19.46l-3.46,3.46A.63.63,0,0,1,9.65,19.3ZM7.11,15.19l2.54,2.54,2.54-2.54L9.65,12.65Z" />

          <path d="M4.11,13.76a.66.66,0,0,1-.46-.19L.19,10.11a.66.66,0,0,1,0-.92L3.65,5.73a.66.66,0,0,1,.92,0L8,9.19a.66.66,0,0,1,0,.92L4.57,13.57A.66.66,0,0,1,4.11,13.76ZM1.57,9.65l2.54,2.54L6.65,9.65,4.11,7.11Z" />

          <path d="M15.19,13.76a.66.66,0,0,1-.46-.19l-3.46-3.46a.66.66,0,0,1,0-.92l3.46-3.46a.66.66,0,0,1,.92,0l3.46,3.46a.64.64,0,0,1,0,.92l-3.46,3.46A.64.64,0,0,1,15.19,13.76ZM12.65,9.65l2.54,2.54,2.54-2.54L15.19,7.11Z" />

          <path d="M9.65,8.22A.63.63,0,0,1,9.19,8L5.73,4.57a.66.66,0,0,1,0-.92L9.19.19a.66.66,0,0,1,.92,0l3.46,3.46a.65.65,0,0,1,0,.92L10.11,8A.63.63,0,0,1,9.65,8.22ZM7.11,4.11,9.65,6.65l2.54-2.54L9.65,1.57Z" />
        </g>
      </g>
    </svg>
  </SvgIcon>
);

Patterns.propTypes = {
  color: PropTypes.string,
};

Patterns.defaultProps = {
  color: '#6d6d71',
};

export default Patterns;
