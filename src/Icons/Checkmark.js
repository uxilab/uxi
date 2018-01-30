import React from 'react';
import PropTypes from 'prop-types';
import SvgIcon from '../SvgIcon';
/* eslint-disable max-len */

const Checkmark = props => (
  <SvgIcon {...props}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 12.68 9.76"
      width="24px"
      height="24px"
    >
      <g id="Layer_2" data-name="Layer 2">
        <g id="Layer_1-2" data-name="Layer 1">
          <polygon points="12.68 1.16 11.52 0 4.08 7.44 1.16 4.52 0 5.68 4.08 9.76 12.68 1.16" />
        </g>
      </g>
    </svg>
  </SvgIcon>
);

Checkmark.propTypes = {
  color: PropTypes.string,
};

Checkmark.defaultProps = {
  color: '#6d6d71',
};

export default Checkmark;
