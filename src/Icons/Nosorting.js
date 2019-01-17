import React from 'react';
import PropTypes from 'prop-types';
import SvgIcon from '../SvgIcon';
/* eslint-disable max-len */

const Nosorting = props => (
  <SvgIcon {...props}>
    <svg
      focusable="false"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 17.1 17.27"
      width="24px"
      height="24px"
    >
      <g id="Layer_2" data-name="Layer 2">
        <g id="Layer_1-2" data-name="Layer 1">
          <polygon points="3.42 0 3.42 14.18 1.16 11.97 0 13.11 4.24 17.27 8.49 13.11 7.33 11.97 5.07 14.18 5.07 0 3.42 0" />
          <polygon points="13.67 17.27 13.67 3.08 15.93 5.29 17.09 4.16 12.85 0 8.61 4.16 9.77 5.3 12.03 3.08 12.02 17.27 13.67 17.27" />
        </g>
      </g>
    </svg>
  </SvgIcon>
);

Nosorting.propTypes = {
  color: PropTypes.string,
};

Nosorting.defaultProps = {
  color: 'currentColor',
};

export default Nosorting;
