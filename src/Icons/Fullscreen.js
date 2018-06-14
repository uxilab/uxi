import React from 'react';
import PropTypes from 'prop-types';
import SvgIcon from '../SvgIcon';
/* eslint-disable max-len */

const Fullscreen = props => (
  <SvgIcon {...props}>
    <svg
      focusable="false"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 15.99"
      width="24px"
      height="24px"
    >
      <g id="Layer_2" data-name="Layer 2">
        <g id="Layer_1-2" data-name="Layer 1">
          <polygon points="5.4 9.43 1.66 13.17 1.63 10.01 0 9.99 0.06 15.93 6 15.99 5.99 14.37 2.82 14.33 6.2 10.96 6.2 10.96 6.57 10.59 5.4 9.43" />
          <polygon points="15.94 0.06 10 0 10.02 1.63 13.18 1.66 9.8 5.03 9.8 5.03 9.43 5.4 10.6 6.57 14.34 2.82 14.37 5.99 16 6 15.94 0.06" />
        </g>
      </g>
    </svg>
  </SvgIcon>
);

Fullscreen.propTypes = {
  color: PropTypes.string
};

Fullscreen.defaultProps = {
  color: '#6d6d71'
};

export default Fullscreen;
