import React from 'react';
import PropTypes from 'prop-types';
import SvgIcon from '../SvgIcon';
/* eslint-disable max-len */

const Sortingdown = props => (
  <SvgIcon {...props}>
    <svg
      focusable="false"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 15.92 17.32"
      width="24px"
      height="24px"
    >
      <g id="Layer_2" data-name="Layer 2">
        <g id="Layer_1-2" data-name="Layer 1">
          <path d="M11.84,5l-.48,1.73H9.78L11.84,0h2l2.08,6.74H14.28L13.77,5Zm1.71-1.14-.42-1.43c-.12-.4-.24-.9-.34-1.3h0c-.1.4-.2.91-.31,1.3l-.4,1.43Z" />
          <polygon points="3.42 0.05 3.42 14.23 1.16 12.02 0 13.16 4.24 17.32 8.49 13.16 7.33 12.02 5.07 14.23 5.07 0.05 3.42 0.05" />
          <path d="M10.23,16.5l3.21-4.62v0H10.53V10.58h4.89v.88L12.28,16v0h3.19v1.26H10.23Z" />
        </g>
      </g>
    </svg>
  </SvgIcon>
);

Sortingdown.propTypes = {
  color: PropTypes.string
};

Sortingdown.defaultProps = {
  color: '#6d6d71'
};

export default Sortingdown;
