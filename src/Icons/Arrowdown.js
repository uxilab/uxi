import React from 'react';
import PropTypes from 'prop-types';
import SvgIcon from '../SvgIcon';
/* eslint-disable max-len */

const Arrowdown = props => (
  <SvgIcon {...props}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 9.3"
      width="24px"
      height="24px"
    >
      <g id="Layer_2" data-name="Layer 2">
        <g id="Layer_1-2" data-name="Layer 1">
          <polyline points="8 9.3 16 1.3 14.7 0 8 6.7 1.3 0 0 1.3" />
        </g>
      </g>
    </svg>
  </SvgIcon>
);

Arrowdown.propTypes = {
  color: PropTypes.string,
};

Arrowdown.defaultProps = {
  color: '#6d6d71',
};

export default Arrowdown;
