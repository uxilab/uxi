import React from 'react';
import PropTypes from 'prop-types';
import SvgIcon from '../SvgIcon';
/* eslint-disable max-len */

const Defaultorganizationimage = props => (
  <SvgIcon {...props}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 36.94 36.94"
      width="24px"
      height="24px"
    >
      <g id="Layer_2" data-name="Layer 2">
        <g id="Layer_1-2" data-name="Layer 1">
          <circle cx="18.47" cy="18.47" r="17.97" />
          <path
            d="M26.78,19.66h1.07a.85.85,0,0,0,.81-.9V15.4a.9.9,0,0,0-.45-.81L18.83,9.46a.74.74,0,0,0-.36-.09.8.8,0,0,0-.36.09L8.74,14.59a.91.91,0,0,0-.46.81v3.36a.86.86,0,0,0,.82.9h1.06v7a.85.85,0,0,0,.81.9H26a.85.85,0,0,0,.81-.9Zm-6.11,6.11H16.28V20.7a2.2,2.2,0,0,1,4.39,0ZM26,17.86a.85.85,0,0,0-.81.9v7H21.92V20.7a3.45,3.45,0,0,0-6.9,0v5.07H11.78v-7a.85.85,0,0,0-.81-.9H9.91V16l.06,0,8.5-4.64.06,0L27,16v1.9Z"
          />
        </g>
      </g>
    </svg>
  </SvgIcon>
);

Defaultorganizationimage.propTypes = {
  color: PropTypes.string,
};

Defaultorganizationimage.defaultProps = {
  color: '#6d6d71',
};

export default Defaultorganizationimage;
