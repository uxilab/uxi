import React, { PropTypes } from 'react';
import SvgIcon from '../SvgIcon';
/* eslint-disable max-len */

const Emailthread = props => (
  <SvgIcon {...props}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 10.26"
      width="24px"
      height="24px"
    >
      <g id="Layer_2" data-name="Layer 2">
        <g id="Layer_1-2" data-name="Layer 1">
          <path d="M16,1.44A1.44,1.44,0,0,0,14.56,0H1.44A1.44,1.44,0,0,0,0,1.44V8.82a1.44,1.44,0,0,0,1.44,1.44H14.56A1.44,1.44,0,0,0,16,8.82Zm-2.27-.21L8,4.81l-.11-.07L2.27,1.23ZM1.23,9V2l.31.19L7.67,6.06a.62.62,0,0,0,.65,0l6.44-4V9Z" />
        </g>
      </g>
    </svg>
  </SvgIcon>
);

Emailthread.propTypes = {
  color: PropTypes.string
};

Emailthread.defaultProps = {
  color: '#6d6d71'
};

export default Emailthread;
