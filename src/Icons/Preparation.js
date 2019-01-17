import React from 'react';
import PropTypes from 'prop-types';
import SvgIcon from '../SvgIcon';
/* eslint-disable max-len */

const Preparation = props => (
  <SvgIcon {...props}>
    <svg
      focusable="false"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 15.25 15.63"
      width="24px"
      height="24px"
    >
      <g id="Layer_2" data-name="Layer 2">
        <g id="Layer_1-2" data-name="Layer 1">
          <circle cx="4.45" cy="4.27" r="1.5" />
          <circle cx="7.64" cy="1.5" r="1.5" />
          <circle cx="10.83" cy="4.27" r="1.5" />
          <polygon points="15.25 6.68 0 6.68 0 7.74 3.92 7.74 3.92 11.79 4.98 11.79 4.98 7.74 10.3 7.74 10.3 11.79 11.35 11.79 11.35 7.74 15.25 7.74 15.25 6.68" />
          <rect x="7.11" y="9.18" width="1.05" height="6.45" />
        </g>
      </g>
    </svg>
  </SvgIcon>
);

Preparation.propTypes = {
  color: PropTypes.string,
};

Preparation.defaultProps = {
  color: 'currentColor',
};

export default Preparation;
