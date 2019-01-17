import React from 'react';
import PropTypes from 'prop-types';
import SvgIcon from '../SvgIcon';
/* eslint-disable max-len */

const Thumbdown = props => (
  <SvgIcon {...props}>
    <svg
      focusable="false"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 14.38 16"
      width="24px"
      height="24px"
    >
      <g id="Layer_2" data-name="Layer 2">
        <g id="Layer_1-2" data-name="Layer 1">
          <path d="M4,0a2.6,2.6,0,0,0-2.5,1.9L.1,6.9a2.6,2.6,0,0,0,2.5,3.3H5.41L4.14,13.41A1.9,1.9,0,0,0,5.91,16a1.86,1.86,0,0,0,1.74-1.16l3.07-6.31v0h3.66V0ZM6.57,14.37a.74.74,0,0,1-1.26.14.72.72,0,0,1-.07-.67l1.59-4a.59.59,0,0,0-.33-.76L6.39,9V9H2.6A1.42,1.42,0,0,1,1.18,7.58H3.12a.45.45,0,0,0,.45-.45.45.45,0,0,0-.45-.45H1.38l.36-1.29h1.9a.45.45,0,0,0,.45-.45.45.45,0,0,0-.45-.45H2l.37-1.34H3.88a.45.45,0,0,0,.44-.45.45.45,0,0,0-.44-.45H2.61v0A1.43,1.43,0,0,1,4,1.18H9.88v6.4Zm6.63-7H11.06V1.18H13.2Z" />
        </g>
      </g>
    </svg>
  </SvgIcon>
);

Thumbdown.propTypes = {
  color: PropTypes.string,
};

Thumbdown.defaultProps = {
  color: 'currentColor',
};

export default Thumbdown;
