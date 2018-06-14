import React from 'react';
import PropTypes from 'prop-types';
import SvgIcon from '../SvgIcon';
/* eslint-disable max-len */

const Audio = props => (
  <SvgIcon {...props}>
    <svg
      focusable="false"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 15.1 16"
      width="24px"
      height="24px"
    >
      <g id="Layer_2" data-name="Layer 2">
        <g id="Layer_1-2" data-name="Layer 1">
          <path d="M15.1.79A.79.79,0,0,0,14,.06L5,3.66a.79.79,0,0,0-.5.73v5.9l-.16-.08A3,3,0,0,0,3,9.92a3,3,0,1,0,3,3v-8l.07,0L13.52,2V7.59l-.16-.08a3,3,0,0,0-1.3-.31,3,3,0,1,0,3,3ZM3,14.42A1.46,1.46,0,1,1,4.51,13,1.47,1.47,0,0,1,3,14.42Zm9-2.7a1.46,1.46,0,1,1,1.46-1.46A1.47,1.47,0,0,1,12.06,11.72Z" />
        </g>
      </g>
    </svg>
  </SvgIcon>
);

Audio.propTypes = {
  color: PropTypes.string
};

Audio.defaultProps = {
  color: '#6d6d71'
};

export default Audio;
