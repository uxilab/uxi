import React from 'react';
import PropTypes from 'prop-types';
import SvgIcon from '../SvgIcon';
/* eslint-disable max-len */

const Manipulation = props => (
  <SvgIcon {...props}>
    <svg
      focusable="false"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 14.28 17.86"
      width="24px"
      height="24px"
    >
      <g id="Layer_2" data-name="Layer 2">
        <g id="Layer_1-2" data-name="Layer 1">
          <path d="M5,.65v2.5A.81.81,0,0,0,5.78,4h6.28a1.57,1.57,0,0,1,1.57,1.57v.25a1.56,1.56,0,0,1-1.57,1.56H2.21A1.56,1.56,0,0,0,.65,8.9v.19a1.56,1.56,0,0,0,1.56,1.56H8.78a1.56,1.56,0,0,1,1.56,1.56h0a1.56,1.56,0,0,1-1.56,1.56H5.72a.82.82,0,0,0-.81.82v2.62" />
        </g>
      </g>
    </svg>
  </SvgIcon>
);

Manipulation.propTypes = {
  color: PropTypes.string,
};

Manipulation.defaultProps = {
  color: 'currentColor',
};

export default Manipulation;
