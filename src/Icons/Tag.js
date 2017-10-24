import React, { PropTypes } from 'react';
import SvgIcon from '../SvgIcon';
/* eslint-disable max-len */

const Tag = props => (
  <SvgIcon {...props}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16.02 16"
      width="24px"
      height="24px"
    >
      <g id="Layer_2" data-name="Layer 2">
        <g id="Layer_1-2" data-name="Layer 1">
          <path d="M16,9.52a.64.64,0,0,0-.19-.46L7,.19A.65.65,0,0,0,6.49,0h0L1,.43a.65.65,0,0,0-.6.6L0,6.44a.64.64,0,0,0,.19.51l8.87,8.87a.69.69,0,0,0,.92,0L15.83,10A.64.64,0,0,0,16,9.52ZM9.52,14.45l-.15-.15L1.32,6.24l.36-4.57.18,0,4.38-.34.07.07,8.14,8.14Z" />
          <path d="M5.57,3.35a1.57,1.57,0,1,0,0,2.22A1.57,1.57,0,0,0,5.57,3.35ZM5.11,5.11a.92.92,0,0,1-1.3-1.3.94.94,0,0,1,1.3,0,.92.92,0,0,1,0,1.3Z" />
        </g>
      </g>
    </svg>
  </SvgIcon>
);

Tag.propTypes = {
  color: PropTypes.string
};

Tag.defaultProps = {
  color: '#6d6d71'
};

export default Tag;
