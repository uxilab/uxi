import React from 'react';
import PropTypes from 'prop-types';
import SvgIcon from '../SvgIcon';
/* eslint-disable max-len */

const Trianglearrowup = props => (
  <SvgIcon {...props}>
    <svg
      focusable="false"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 14 12"
      width="24px"
      height="24px"
    >
      <g id="Layer_2" data-name="Layer 2">
        <g id="Layer_1-2" data-name="Layer 1">
          <polygon points="0 12 7.01 0 14 12 0 12" />
        </g>
      </g>
    </svg>
  </SvgIcon>
);

Trianglearrowup.propTypes = {
  color: PropTypes.string,
};

Trianglearrowup.defaultProps = {
  color: '#6d6d71',
};

export default Trianglearrowup;
