import React from 'react';
import PropTypes from 'prop-types';
import SvgIcon from '../SvgIcon';
/* eslint-disable max-len */

const Arrowright = props => (
  <SvgIcon {...props}>
    <svg
      focusable="false"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 9.3 16"
      width="24px"
      height="24px"
    >
      <g id="Layer_2" data-name="Layer 2">
        <g id="Layer_1-2" data-name="Layer 1">
          <polyline points="9.3 8 1.3 0 0 1.3 6.7 8 0 14.7 1.3 16" />
        </g>
      </g>
    </svg>
  </SvgIcon>
);

Arrowright.propTypes = {
  color: PropTypes.string,
};

Arrowright.defaultProps = {
  color: 'currentColor',
};

export default Arrowright;
