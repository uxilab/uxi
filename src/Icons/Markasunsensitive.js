import React from 'react';
import PropTypes from 'prop-types';
import SvgIcon from '../SvgIcon';
/* eslint-disable max-len */

const Markasunsensitive = props => (
  <SvgIcon {...props}>
    <svg
      focusable="false"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 12.39 16"
      width="24px"
      height="24px"
    >
      <g id="Layer_2" data-name="Layer 2">
        <g id="Layer_1-2" data-name="Layer 1">
          <circle cx="6.2" cy="11.15" r="1.35" />
          <path d="M10.73,6.31H3.38V4.39A2.81,2.81,0,0,1,9,3.91h1.58a4.38,4.38,0,0,0-8.74.49V6.31H1.69A1.69,1.69,0,0,0,0,8v6.31A1.69,1.69,0,0,0,1.69,16h9a1.69,1.69,0,0,0,1.69-1.69V8A1.69,1.69,0,0,0,10.73,6.31ZM1.58,14.42V7.89h9.24v6.54Z" />
        </g>
      </g>
    </svg>
  </SvgIcon>
);

Markasunsensitive.propTypes = {
  color: PropTypes.string,
};

Markasunsensitive.defaultProps = {
  color: '#6d6d71',
};

export default Markasunsensitive;
