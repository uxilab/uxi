import React from 'react';
import PropTypes from 'prop-types';
import SvgIcon from '../SvgIcon';
/* eslint-disable max-len */

const Hamburger = props => (
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
          <rect width="16" height="1.73" />
          <rect y="7.14" width="16" height="1.73" />
          <rect y="14.28" width="16" height="1.72" />
        </g>
      </g>
    </svg>
  </SvgIcon>
);

Hamburger.propTypes = {
  color: PropTypes.string,
};

Hamburger.defaultProps = {
  color: 'currentColor',
};

export default Hamburger;
