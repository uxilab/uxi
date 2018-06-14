import React from 'react';
import PropTypes from 'prop-types';
import SvgIcon from '../SvgIcon';
/* eslint-disable max-len */

const Phone = props => (
  <SvgIcon {...props}>
    <svg
      focusable="false"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 9.6 16.25"
      width="24px"
      height="24px"
    >
      <g id="Layer_2" data-name="Layer 2">
        <g id="Layer_1-2" data-name="Layer 1">
          <path d="M8.12,0H1.48A1.48,1.48,0,0,0,0,1.48v13.3a1.48,1.48,0,0,0,1.48,1.48H8.12A1.48,1.48,0,0,0,9.6,14.77V1.48A1.48,1.48,0,0,0,8.12,0Zm.19,12.92v2h-7v-2Zm-7-1.29v-7h7v7Zm0-8.31v-2h7v2Z" />
        </g>
      </g>
    </svg>
  </SvgIcon>
);

Phone.propTypes = {
  color: PropTypes.string
};

Phone.defaultProps = {
  color: '#6d6d71'
};

export default Phone;
