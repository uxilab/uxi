import React from 'react';
import PropTypes from 'prop-types';
import SvgIcon from '../SvgIcon';
/* eslint-disable max-len */

const Quote = props => (
  <SvgIcon {...props}>
    <svg
      focusable="false"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 13.14"
      width="24px"
      height="24px"
    >
      <g id="Layer_2" data-name="Layer 2">
        <g id="Layer_1-2" data-name="Layer 1">
          <path d="M5.82,0H1.44A1.45,1.45,0,0,0,0,1.44V5.82A1.45,1.45,0,0,0,1.44,7.26H5.78V9.51a2.16,2.16,0,0,1-2.15,2.15.74.74,0,0,0,0,1.48A3.63,3.63,0,0,0,7.26,9.51V1.44A1.45,1.45,0,0,0,5.82,0ZM1.48,5.82l0-4.34,4.34,0V5.78Z" />
          <path d="M14.56,0H10.18A1.45,1.45,0,0,0,8.74,1.44V5.82a1.45,1.45,0,0,0,1.44,1.44h4.34V9.51a2.16,2.16,0,0,1-2.15,2.15.74.74,0,1,0,0,1.48A3.63,3.63,0,0,0,16,9.51V1.44A1.45,1.45,0,0,0,14.56,0ZM10.22,5.82l0-4.34,4.34,0V5.78Z" />
        </g>
      </g>
    </svg>
  </SvgIcon>
);

Quote.propTypes = {
  color: PropTypes.string,
};

Quote.defaultProps = {
  color: '#6d6d71',
};

export default Quote;
