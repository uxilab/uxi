import React from 'react';
import PropTypes from 'prop-types';
import SvgIcon from '../SvgIcon';
/* eslint-disable max-len */

const Arrowup = props => (
  <SvgIcon {...props}>
    <svg
      focusable="false"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 9.3"
      width="24px"
      height="24px"
    >
      <g id="Layer_2" data-name="Layer 2">
        <g id="Layer_1-2" data-name="Layer 1">
          <polyline points="8 0 0 8 1.3 9.3 8 2.6 14.7 9.3 16 8" />
        </g>
      </g>
    </svg>
  </SvgIcon>
);

Arrowup.propTypes = {
  color: PropTypes.string,
};

Arrowup.defaultProps = {
  color: 'currentColor',
};

export default Arrowup;
