import React, { PropTypes } from 'react';
import SvgIcon from '../SvgIcon';
/* eslint-disable max-len */

const Signout = props => (
  <SvgIcon {...props}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      width="24px"
      height="24px"
    >
      <g id="Layer_2" data-name="Layer 2">
        <g id="Layer_1-2" data-name="Layer 1">
          <polygon points="0 8 4.08 12.08 5.2 10.97 3.02 8.79 10.19 8.79 10.19 7.21 3.02 7.21 5.2 5.03 4.08 3.92 0 8" />
          <path d="M1.69,16H14.31A1.69,1.69,0,0,0,16,14.31V1.69A1.69,1.69,0,0,0,14.31,0H1.69A1.69,1.69,0,0,0,0,1.69v2H1.58V1.58H14.42V14.42H1.58V12.36H0v2A1.69,1.69,0,0,0,1.69,16Z" />
        </g>
      </g>
    </svg>
  </SvgIcon>
);

Signout.propTypes = {
  color: PropTypes.string
};

Signout.defaultProps = {
  color: '#6d6d71'
};

export default Signout;
