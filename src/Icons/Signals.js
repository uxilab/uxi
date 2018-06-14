import React from 'react';
import PropTypes from 'prop-types';
import SvgIcon from '../SvgIcon';
/* eslint-disable max-len */

const Signals = props => (
  <SvgIcon {...props}>
    <svg
      focusable="false"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 10.28 16"
      width="24px"
      height="24px"
    >
      <g id="Layer_2" data-name="Layer 2">
        <g id="Layer_1-2" data-name="Layer 1">
          <path d="M8.56,1.3A5.22,5.22,0,0,0,4.53,0,5.18,5.18,0,0,0,.06,4.38,5.11,5.11,0,0,0,1.91,9.14a1.61,1.61,0,0,1,.56,1.26s0,.71,0,.82v1.85a2.33,2.33,0,0,0,1.84,2.22v.1a.67.67,0,0,0,.72.61h.19A.67.67,0,0,0,6,15.39v-.1H6a2.31,2.31,0,0,0,1.85-2.22v-2s0-.62,0-.62a1.75,1.75,0,0,1,.61-1.34A5.14,5.14,0,0,0,8.56,1.3ZM5.41,15.36h0Zm1.4-2.29A1.36,1.36,0,0,1,5.4,14.36H4.9a1.35,1.35,0,0,1-1.41-1.29v-1.3H6.81Zm1-4.75a2.74,2.74,0,0,0-1,2.11v.34H3.47V10.4a2.6,2.6,0,0,0-.93-2A4.14,4.14,0,0,1,1,4.52,4.18,4.18,0,0,1,4.65,1a4.13,4.13,0,0,1,3.25,1,4.14,4.14,0,0,1-.11,6.27Z" />
          <rect x="4.65" y="5.88" width="1" height="3.68" />
          <rect x="4.65" y="4.38" width="1" height="1.06" />
        </g>
      </g>
    </svg>
  </SvgIcon>
);

Signals.propTypes = {
  color: PropTypes.string
};

Signals.defaultProps = {
  color: '#6d6d71'
};

export default Signals;
