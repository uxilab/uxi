import React from 'react';
import PropTypes from 'prop-types';
import SvgIcon from '../SvgIcon';
/* eslint-disable max-len */

const Tileview = props => (
  <SvgIcon {...props}>
    <svg
      focusable="false"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16.6 16.96"
      width="24px"
      height="24px"
    >
      <g id="Layer_2" data-name="Layer 2">
        <g id="Layer_1-2" data-name="Layer 1">
          <path d="M7.4,8H.6A.6.6,0,0,1,0,7.4V.6A.6.6,0,0,1,.6,0H7.4A.6.6,0,0,1,8,.6V7.4A.6.6,0,0,1,7.4,8ZM1.2,6.8H6.8V1.2H1.2Z" />
          <rect x="9.8" y="2.16" width="6.8" height="1.2" />
          <rect x="9.8" y="4.64" width="6.8" height="1.2" />
          <path d="M7.4,17H.6a.6.6,0,0,1-.6-.6V9.55A.6.6,0,0,1,.6,9H7.4a.6.6,0,0,1,.6.6v6.81A.6.6,0,0,1,7.4,17Zm-6.2-1.2H6.8V10.15H1.2Z" />
          <rect x="9.8" y="11.11" width="6.8" height="1.2" />
          <rect x="9.8" y="13.6" width="6.8" height="1.2" />
        </g>
      </g>
    </svg>
  </SvgIcon>
);

Tileview.propTypes = {
  color: PropTypes.string,
};

Tileview.defaultProps = {
  color: 'currentColor',
};

export default Tileview;
