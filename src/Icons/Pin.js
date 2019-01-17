import React from 'react';
import PropTypes from 'prop-types';
import SvgIcon from '../SvgIcon';
/* eslint-disable max-len */

const Pin = props => (
  <SvgIcon {...props}>
    <svg
      focusable="false"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 9.29 16"
      width="24px"
      height="24px"
    >
      <g id="Layer_2" data-name="Layer 2">
        <g id="Layer_1-2" data-name="Layer 1">
          <path d="M4.65,0A4.65,4.65,0,0,0,0,4.65c0,2.19,3.25,9.44,3.9,10.87a.82.82,0,0,0,1.49,0c.4-.88,3.9-8.63,3.9-10.87A4.65,4.65,0,0,0,4.65,0Zm.13,12.87-.13.3-.13-.3C3.84,11.3,1.63,6.06,1.63,4.65a3,3,0,0,1,6,0C7.66,6.07,5.45,11.3,4.78,12.87Z" />
          <circle cx="4.65" cy="4.65" r="1.29" />
        </g>
      </g>
    </svg>
  </SvgIcon>
);

Pin.propTypes = {
  color: PropTypes.string,
};

Pin.defaultProps = {
  color: 'currentColor',
};

export default Pin;
