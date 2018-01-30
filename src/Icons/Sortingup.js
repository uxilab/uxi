import React from 'react';
import PropTypes from 'prop-types';
import SvgIcon from '../SvgIcon';
/* eslint-disable max-len */

const Sortingup = props => (
  <SvgIcon {...props}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 15.92 17.32"
      width="24px"
      height="24px"
    >
      <g id="Layer_2" data-name="Layer 2">
        <g id="Layer_1-2" data-name="Layer 1">
          <path d="M11.83,5l-.48,1.73H9.77L11.83,0h2l2.09,6.74H14.28L13.76,5Zm1.71-1.14-.42-1.43c-.12-.4-.24-.9-.34-1.3h0c-.1.4-.2.91-.31,1.3l-.4,1.43Z" />
          <polygon points="5.07 17.32 5.07 3.13 7.33 5.34 8.49 4.21 4.24 0.05 0 4.21 1.16 5.34 3.42 3.13 3.42 17.32 5.07 17.32" />
          <path d="M10.23,16.5l3.21-4.62v0H10.53V10.58h4.89v.88L12.28,16v0h3.19v1.26H10.23Z" />
        </g>
      </g>
    </svg>
  </SvgIcon>
);

Sortingup.propTypes = {
  color: PropTypes.string,
};

Sortingup.defaultProps = {
  color: '#6d6d71',
};

export default Sortingup;
