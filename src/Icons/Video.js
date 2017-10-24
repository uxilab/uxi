import React from 'react';
import PropTypes from 'prop-types';
import SvgIcon from '../SvgIcon';
/* eslint-disable max-len */

const Video = props => (
  <SvgIcon {...props}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 15.19 10.57"
      width="24px"
      height="24px"
    >
      <g id="Layer_2" data-name="Layer 2">
        <g id="Layer_1-2" data-name="Layer 1">
          <path d="M9.9,0H1.6A1.6,1.6,0,0,0,0,1.6V9a1.6,1.6,0,0,0,1.6,1.59H9.9A1.6,1.6,0,0,0,11.5,9V7.3l2.72,1.36a.67.67,0,0,0,1-.6V2.52a.67.67,0,0,0-.32-.57h0a.68.68,0,0,0-.65,0L11.5,3.28V1.6A1.6,1.6,0,0,0,9.9,0Zm.25,9.23H1.35V1.35h8.81Zm3.69-5.62V7L11.5,5.79v-1Z" />
        </g>
      </g>
    </svg>
  </SvgIcon>
);

Video.propTypes = {
  color: PropTypes.string
};

Video.defaultProps = {
  color: '#6d6d71'
};

export default Video;
