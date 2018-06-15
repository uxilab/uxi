import React from 'react';
import PropTypes from 'prop-types';
import SvgIcon from '../SvgIcon';
/* eslint-disable max-len */

const Event = props => (
  <SvgIcon {...props}>
    <svg
      focusable="false"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 14.57 16"
      width="24px"
      height="24px"
    >
      <g id="Layer_2" data-name="Layer 2">
        <g id="Layer_1-2" data-name="Layer 1">
          <path d="M5.34.73a.73.73,0,1,0-1.46,0v2.6a.73.73,0,1,0,1.46,0Z" />
          <path d="M10.7.73a.73.73,0,1,0-1.46,0v2.6a.73.73,0,1,0,1.46,0Z" />
          <rect x="6.44" y="1.4" width="1.7" height="1.25" />
          <path d="M14.57,2.89a1.46,1.46,0,0,0-1.46-1.46H11.68V2.68h1.65V6.13H1.25V2.68H2.93V1.43H1.46A1.46,1.46,0,0,0,0,2.89V14.54A1.46,1.46,0,0,0,1.46,16H13.11a1.46,1.46,0,0,0,1.46-1.46ZM1.25,14.75V7.59H13.32v7.16Z" />
        </g>
      </g>
    </svg>
  </SvgIcon>
);

Event.propTypes = {
  color: PropTypes.string,
};

Event.defaultProps = {
  color: '#6d6d71',
};

export default Event;
