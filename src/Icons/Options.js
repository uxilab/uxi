import React from 'react';
import PropTypes from 'prop-types';
import SvgIcon from '../SvgIcon';
/* eslint-disable max-len */

const Options = props => (
  <SvgIcon {...props}>
    <svg focusable="false"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 2.67 16"
      width="24px"
      height="24px"
    >
      <g id="Layer_2" data-name="Layer 2">
        <g id="Layer_1-2" data-name="Layer 1">
          <circle cx="1.33" cy="1.33" r="1.33" />
          <circle cx="1.33" cy="14.67" r="1.33" />
          <circle cx="1.33" cy="8" r="1.33" />
        </g>
      </g>
    </svg>
  </SvgIcon>
);

Options.propTypes = {
  color: PropTypes.string,
};

Options.defaultProps = {
  color: '#6d6d71',
};

export default Options;
