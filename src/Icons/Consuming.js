import React from 'react';
import PropTypes from 'prop-types';
import SvgIcon from '../SvgIcon';
/* eslint-disable max-len */

const Consuming = props => (
  <SvgIcon {...props}>
    <svg
      focusable="false"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 15.75 15.27"
      width="24px"
      height="24px"
    >
      <g id="Layer_2" data-name="Layer 2">
        <g id="Layer_1-2" data-name="Layer 1">
          <circle cx="10.86" cy="10.99" r="1.5" />
          <circle cx="7.68" cy="7.99" r="1.5" />
          <circle cx="7.68" cy="1.5" r="1.5" />
          <circle cx="7.68" cy="13.77" r="1.5" />
          <circle cx="4.49" cy="10.99" r="1.5" />
          <path d="M10,4.28V5.64a6.56,6.56,0,0,1,4.47,6.1h1.3A7.89,7.89,0,0,0,10,4.28Z" />
          <path d="M5.38,5.79V4.39A7.84,7.84,0,0,0,0,11.74H1.3A6.54,6.54,0,0,1,5.38,5.79Z" />
        </g>
      </g>
    </svg>
  </SvgIcon>
);

Consuming.propTypes = {
  color: PropTypes.string,
};

Consuming.defaultProps = {
  color: '#6d6d71',
};

export default Consuming;
