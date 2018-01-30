import React from 'react';
import PropTypes from 'prop-types';
import SvgIcon from '../SvgIcon';
/* eslint-disable max-len */

const Checkbox = props => (
  <SvgIcon {...props}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      width="24px"
      height="24px"
    >
      <g id="Layer_2" data-name="Layer 2">
        <g id="Layer_1-2" data-name="Layer 1">
          <path d="M16,1.6A1.6,1.6,0,0,0,14.4,0H1.6A1.6,1.6,0,0,0,0,1.6V14.4A1.6,1.6,0,0,0,1.6,16H14.4A1.6,1.6,0,0,0,16,14.4Zm-14.63,13V1.37H14.63V14.63Z" />
          <polygon points="7.48 8.82 5.41 6.75 4.3 7.87 7.48 11.05 12.46 6.07 11.35 4.95 7.48 8.82" />
        </g>
      </g>
    </svg>
  </SvgIcon>
);

Checkbox.propTypes = {
  color: PropTypes.string,
};

Checkbox.defaultProps = {
  color: '#6d6d71',
};

export default Checkbox;
