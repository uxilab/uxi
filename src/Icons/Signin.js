import React from 'react';
import PropTypes from 'prop-types';
import SvgIcon from '../SvgIcon';
/* eslint-disable max-len */

const Signin = props => (
  <SvgIcon {...props}>
    <svg
      focusable="false"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      width="24px"
      height="24px"
    >
      <g id="Layer_2" data-name="Layer 2">
        <g id="Layer_1-2" data-name="Layer 1">
          <polygon points="10.19 8 6.1 3.92 4.99 5.03 7.17 7.21 0 7.21 0 8.79 7.17 8.79 4.99 10.97 6.1 12.08 10.19 8" />
          <path d="M1.69,16H14.31A1.69,1.69,0,0,0,16,14.31V1.69A1.69,1.69,0,0,0,14.31,0H1.69A1.69,1.69,0,0,0,0,1.69v2H1.58V1.58H14.42V14.42H1.58V12.36H0v2A1.69,1.69,0,0,0,1.69,16Z" />
        </g>
      </g>
    </svg>
  </SvgIcon>
);

Signin.propTypes = {
  color: PropTypes.string,
};

Signin.defaultProps = {
  color: '#6d6d71',
};

export default Signin;
