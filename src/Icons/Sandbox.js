import React from 'react';
import PropTypes from 'prop-types';
import SvgIcon from '../SvgIcon';
/* eslint-disable max-len */

const Sandbox = props => (
  <SvgIcon {...props}>
    <svg
      focusable="false"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 15.75 15.75"
      width="24px"
      height="24px"
    >
      <g id="Layer_2" data-name="Layer 2">
        <g id="Layer_1-2" data-name="Layer 1">
          <path d="M15.7,5.23s0,0,0,0l0-.06s0,0,0,0L12.44.3a.68.68,0,0,0-.56-.3h-8a.68.68,0,0,0-.57.3L.11,5.1s0,0,0,0v0s0,0,0,.06a.59.59,0,0,0,0,.22v9.62a.67.67,0,0,0,.67.67H15.08a.67.67,0,0,0,.67-.67V5.46A.68.68,0,0,0,15.7,5.23ZM4.24,1.35h7.27l2.3,3.45H1.94ZM14.4,6.15V10l-.74-.43a3.55,3.55,0,0,0-3.83.2A2.21,2.21,0,0,1,7,9.59a3.52,3.52,0,0,0-4.57-.23l-1.09.83v-4Zm-13,8.25V11.83l1.88-1.44a2.22,2.22,0,0,1,2.89.15,3.52,3.52,0,0,0,4.49.29,2.24,2.24,0,0,1,2.4-.11l1.39.8V14.4Z" />
        </g>
      </g>
    </svg>
  </SvgIcon>
);

Sandbox.propTypes = {
  color: PropTypes.string,
};

Sandbox.defaultProps = {
  color: '#6d6d71',
};

export default Sandbox;
