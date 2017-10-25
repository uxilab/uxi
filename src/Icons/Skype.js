import React from 'react';
import PropTypes from 'prop-types';
import SvgIcon from '../SvgIcon';
/* eslint-disable max-len */

const Skype = props => (
  <SvgIcon {...props}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      width="24px"
      height="24px"
    >
      <g id="Layer_2" data-name="Layer 2">
        <g id="Layer_1-2" data-name="Layer 1">
          <path d="M9.83,8A3.23,3.23,0,0,0,9,7.63c-.3-.1-.64-.19-1-.26l-.63-.15A2,2,0,0,1,7,7.07a.81.81,0,0,1-.27-.21.4.4,0,0,1-.09-.27A.52.52,0,0,1,7,6.16,1.43,1.43,0,0,1,7.75,6a1.29,1.29,0,0,1,.76.18,1.52,1.52,0,0,1,.41.51A1.45,1.45,0,0,0,9.2,7a.57.57,0,0,0,.39.12.65.65,0,0,0,.66-.64A1.1,1.1,0,0,0,10.1,6a1.63,1.63,0,0,0-.44-.5A2.37,2.37,0,0,0,8.9,5.1,3.64,3.64,0,0,0,7.84,5a3.88,3.88,0,0,0-1.34.21,1.93,1.93,0,0,0-.89.62,1.49,1.49,0,0,0-.31.92,1.43,1.43,0,0,0,.3.92,2,2,0,0,0,.78.57,6.75,6.75,0,0,0,1.2.36c.35.07.63.14.84.21A1.25,1.25,0,0,1,8.9,9a.56.56,0,0,1,.18.43.67.67,0,0,1-.34.57,1.61,1.61,0,0,1-.92.24,1.58,1.58,0,0,1-.66-.12,1,1,0,0,1-.38-.3,2.3,2.3,0,0,1-.26-.46A1,1,0,0,0,6.25,9a.6.6,0,0,0-.4-.14A.67.67,0,0,0,5.37,9a.57.57,0,0,0-.19.43,1.46,1.46,0,0,0,.29.82,2.14,2.14,0,0,0,.75.67,3.49,3.49,0,0,0,1.64.34,3.73,3.73,0,0,0,1.43-.25,2.09,2.09,0,0,0,.93-.7,1.73,1.73,0,0,0,.32-1,1.62,1.62,0,0,0-.19-.8A1.57,1.57,0,0,0,9.83,8Z" />
          <path d="M8,0a8,8,0,1,0,8,8A8,8,0,0,0,8,0Zm2,13a2.64,2.64,0,0,1-1.25-.31,4.67,4.67,0,0,1-.84.08A4.57,4.57,0,0,1,3.39,7.25a2.65,2.65,0,0,1,3.7-3.58,4.57,4.57,0,0,1,5.35,4.5,4.58,4.58,0,0,1-.11,1A2.65,2.65,0,0,1,10,13Z" />
        </g>
      </g>
    </svg>
  </SvgIcon>
);

Skype.propTypes = {
  color: PropTypes.string
};

Skype.defaultProps = {
  color: '#6d6d71'
};

export default Skype;
