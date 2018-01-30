import React from 'react';
import PropTypes from 'prop-types';
import SvgIcon from '../SvgIcon';
/* eslint-disable max-len */

const Youtube2 = props => (
  <SvgIcon {...props}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      width="24px"
      height="24px"
    >
      <g id="Layer_2" data-name="Layer 2">
        <g id="Layer_1-2" data-name="Layer 1">
          <path d="M8,0a8,8,0,1,0,8,8A8,8,0,0,0,8,0Zm4.34,10.13a.14.14,0,0,0,0,.12v0a.84.84,0,0,1-.81.58h.08A26.71,26.71,0,0,1,8,11.1a26,26,0,0,1-3.57-.23h.08a.84.84,0,0,1-.81-.58v0a.14.14,0,0,1,0-.12A18.85,18.85,0,0,1,3.5,8a18.85,18.85,0,0,1,.16-2.13.14.14,0,0,0,0-.12v0a.84.84,0,0,1,.81-.58H4.43A26.74,26.74,0,0,1,8,4.9a26,26,0,0,1,3.57.23h-.08a.84.84,0,0,1,.81.58v0a.14.14,0,0,1,0,.12A12.62,12.62,0,0,1,12.5,8,18.85,18.85,0,0,1,12.34,10.13Z" />
          <path d="M9.32,8.19,7.5,9.51a.19.19,0,0,1-.23,0,.21.21,0,0,1-.12-.19V6.68a.21.21,0,0,1,.12-.19.25.25,0,0,1,.23,0L9.32,7.81A.3.3,0,0,1,9.4,8,.14.14,0,0,1,9.32,8.19Z" />
        </g>
      </g>
    </svg>
  </SvgIcon>
);

Youtube2.propTypes = {
  color: PropTypes.string,
};

Youtube2.defaultProps = {
  color: '#6d6d71',
};

export default Youtube2;
