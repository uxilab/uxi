import React from 'react';
import PropTypes from 'prop-types';
import SvgIcon from '../SvgIcon';
/* eslint-disable max-len */

const Trianglearrow = props => (
  <SvgIcon {...props}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 14 12"
      width="24px"
      height="24px"
    >
      <g id="Layer_2" data-name="Layer 2">
        <g id="Layer_1-2" data-name="Layer 1">
          <polygon points="14 0 6.99 12 0 0 14 0" />
        </g>
      </g>
    </svg>
  </SvgIcon>
);

Trianglearrow.propTypes = {
  color: PropTypes.string
};

Trianglearrow.defaultProps = {
  color: '#6d6d71'
};

export default Trianglearrow;
