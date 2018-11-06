import React from 'react';
import PropTypes from 'prop-types';
import SvgIcon from '../SvgIcon';
/* eslint-disable max-len */

const Listul = props => (
  <SvgIcon {...props}>
    <svg
      focusable="false"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 14.2"
      width="24px"
      height="24px"
    >
      <g id="Layer_2" data-name="Layer 2">
        <g id="Layer_1-2" data-name="Layer 1">
          <polygon points="0 5.8 0 4.2 1.59 5 0 5.8" />
          <rect x="3.52" y="4.2" width="12.48" height="1.59" />
          <polygon points="0 10 0 8.4 1.59 9.2 0 10" />
          <rect x="3.52" y="8.4" width="12.48" height="1.59" />
          <rect y="12.61" width="12.48" height="1.59" />
          <rect width="12.48" height="1.59" />
        </g>
      </g>
    </svg>
  </SvgIcon>
);

Listul.propTypes = {
  color: PropTypes.string,
};

Listul.defaultProps = {
  color: '#6d6d71',
};

export default Listul;
