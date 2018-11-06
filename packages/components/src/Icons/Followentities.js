import React from 'react';
import PropTypes from 'prop-types';
import SvgIcon from '../SvgIcon';
/* eslint-disable max-len */

const Followentities = props => (
  <SvgIcon {...props}>
    <svg
      focusable="false"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      width="24px"
      height="24px"
    >
      <g id="Layer_2" data-name="Layer 2">
        <g id="Layer_1-2" data-name="Layer 1">
          <path d="M8,0a8,8,0,1,0,8,8A8,8,0,0,0,8,0ZM8,14.6A6.6,6.6,0,1,1,14.6,8,6.61,6.61,0,0,1,8,14.6Z" />
          <path d="M12.64,7.19a2.86,2.86,0,0,0-3-3,2.2,2.2,0,0,0-1.47.62L8,4.94l-.15-.15a2.2,2.2,0,0,0-1.47-.62,2.86,2.86,0,0,0-3,3c0,2.69,3.9,5.1,4.34,5.37a.61.61,0,0,0,.6,0C8.75,12.29,12.64,9.87,12.64,7.19ZM8.13,11.28,8,11.36l-.13-.09c-.56-.38-3.34-2.36-3.34-4.09A1.72,1.72,0,0,1,6.38,5.34a1.17,1.17,0,0,1,1,1,.59.59,0,1,0,1.17,0,1.17,1.17,0,0,1,1-1,1.72,1.72,0,0,1,1.85,1.85C11.47,8.92,8.69,10.9,8.13,11.28Z" />
        </g>
      </g>
    </svg>
  </SvgIcon>
);

Followentities.propTypes = {
  color: PropTypes.string,
};

Followentities.defaultProps = {
  color: '#6d6d71',
};

export default Followentities;
