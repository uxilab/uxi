import React from 'react';
import PropTypes from 'prop-types';
import SvgIcon from '../SvgIcon';
/* eslint-disable max-len */

const Archive = props => (
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
          <path d="M14.22,0H1.78A1.78,1.78,0,0,0,0,1.78V14.22A1.78,1.78,0,0,0,1.78,16H14.22A1.78,1.78,0,0,0,16,14.22V1.78A1.78,1.78,0,0,0,14.22,0Zm0,14.22H1.78V8.91H14.22ZM1.78,7.09V1.78H14.22V7.09Z" />
          <circle cx="8" cy="4.59" r="0.84" />
          <circle cx="8" cy="11.52" r="0.84" />
        </g>
      </g>
    </svg>
  </SvgIcon>
);

Archive.propTypes = {
  color: PropTypes.string,
};

Archive.defaultProps = {
  color: 'currentColor',
};

export default Archive;
