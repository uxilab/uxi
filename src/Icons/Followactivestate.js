import React from 'react';
import PropTypes from 'prop-types';
import SvgIcon from '../SvgIcon';
/* eslint-disable max-len */

const Followactivestate = props => (
  <SvgIcon {...props} >

    <svg focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="24px" height="24px">
      <g id="Layer_2" data-name="Layer 2">
        <g id="Layer_1-2" data-name="Layer 1">
          <path d="M8,0a8,8,0,1,0,8,8A8,8,0,0,0,8,0ZM8,14.6A6.6,6.6,0,1,1,14.6,8,6.61,6.61,0,0,1,8,14.6Z" />
          <path d="M9.62,4.17a2.24,2.24,0,0,0-1.47.62L8,4.94l-.15-.15a2.24,2.24,0,0,0-1.47-.62,2.86,2.86,0,0,0-3,3c0,2.68,3.9,5.1,4.34,5.37a.59.59,0,0,0,.6,0c.45-.27,4.34-2.69,4.34-5.37A2.86,2.86,0,0,0,9.62,4.17Z" />
        </g>
      </g>
    </svg>
  </SvgIcon>
);

Followactivestate.propTypes = {
  color: PropTypes.string,
};

Followactivestate.defaultProps = {
  color: '#6d6d71',
};

export default Followactivestate;
