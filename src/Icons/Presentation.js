import React from 'react';
import PropTypes from 'prop-types';
import SvgIcon from '../SvgIcon';
/* eslint-disable max-len */

const Presentation = props => (
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
          <path d="M16,1.5A1.51,1.51,0,0,0,14.5,0H1.5A1.51,1.51,0,0,0,0,1.5V9.62a1.51,1.51,0,0,0,1.5,1.5H6.33L1.46,16h2l3.89-3.89V16H8.69V12.11L12.59,16h2L9.67,11.13H14.5A1.51,1.51,0,0,0,16,9.62ZM14.61,9.74H1.39V4.63H14.61Zm0-6.5H1.39V1.38H14.62Z" />
        </g>
      </g>
    </svg>
  </SvgIcon>
);

Presentation.propTypes = {
  color: PropTypes.string,
};

Presentation.defaultProps = {
  color: 'currentColor',
};

export default Presentation;
