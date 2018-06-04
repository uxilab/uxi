import React from 'react';
import PropTypes from 'prop-types';
import SvgIcon from '../SvgIcon';
/* eslint-disable max-len */

const Externallink = props => (
  <SvgIcon {...props}>
    <svg focusable="false"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      width="24px"
      height="24px"
    >
      <g id="Layer_2" data-name="Layer 2">
        <g id="Layer_1-2" data-name="Layer 1">
          <polygon points="14.34 2.88 14.37 6.04 16 6.05 15.94 0.11 10 0.05 10.02 1.68 13.18 1.71 5.05 9.84 6.2 11.02 14.34 2.88" />
          <path d="M14.42,8.36v6.07H1.58V1.58H7.32V0H1.69A1.69,1.69,0,0,0,0,1.69V14.31A1.69,1.69,0,0,0,1.69,16H14.31A1.69,1.69,0,0,0,16,14.31v-6Z" />
        </g>
      </g>
    </svg>
  </SvgIcon>
);

Externallink.propTypes = {
  color: PropTypes.string,
};

Externallink.defaultProps = {
  color: '#6d6d71',
};

export default Externallink;
