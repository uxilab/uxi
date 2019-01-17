import React from 'react';
import PropTypes from 'prop-types';
import SvgIcon from '../SvgIcon';
/* eslint-disable max-len */

const Code = props => (
  <SvgIcon {...props}>
    <svg
      focusable="false"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16.18 16"
      width="24px"
      height="24px"
    >
      <g id="Layer_2" data-name="Layer 2">
        <g id="Layer_1-2" data-name="Layer 1">
          <path d="M5.14,4.81a.85.85,0,0,0-.06-1.2.85.85,0,0,0-1.2.05L.23,7.56a.85.85,0,0,0,0,1.17l3.66,3.9a.86.86,0,0,0,.5.25v0h.12a.89.89,0,0,0,.57-.23.85.85,0,0,0,0-1.2L2,8.16,5.11,4.83Z" />
          <path d="M16,7.54,12.3,3.64a.87.87,0,0,0-1.19,0,.85.85,0,0,0-.27.59.84.84,0,0,0,.22.61l3.11,3.33L11,11.45a.8.8,0,0,0-.23.57.84.84,0,0,0,.85.85.91.91,0,0,0,.63-.28L16,8.7A.85.85,0,0,0,16,7.54Z" />
          <path d="M9.73,0A.8.8,0,0,0,9.1.13a.84.84,0,0,0-.37.55L5.81,15a.8.8,0,0,0,.11.63.85.85,0,0,0,.54.37.45.45,0,0,0,.18,0,.83.83,0,0,0,.83-.68L10.38,1A.84.84,0,0,0,9.73,0Z" />
        </g>
      </g>
    </svg>
  </SvgIcon>
);

Code.propTypes = {
  color: PropTypes.string,
};

Code.defaultProps = {
  color: 'currentColor',
};

export default Code;
