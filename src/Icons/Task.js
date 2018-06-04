import React from 'react';
import PropTypes from 'prop-types';
import SvgIcon from '../SvgIcon';
/* eslint-disable max-len */

const Task = props => (
  <SvgIcon {...props}>
    <svg focusable="false"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 12.48 16"
      width="24px"
      height="24px"
    >
      <g id="Layer_2" data-name="Layer 2">
        <g id="Layer_1-2" data-name="Layer 1">
          <path d="M8.88,2.11l0-.08A2.7,2.7,0,0,0,3.62,2l0,.08H2.82V3.52H1.31A1.31,1.31,0,0,0,0,4.83v9.87A1.31,1.31,0,0,0,1.31,16h9.87a1.31,1.31,0,0,0,1.31-1.31V4.83a1.31,1.31,0,0,0-1.31-1.31H9.66V2.11ZM4.93,2A1.51,1.51,0,0,1,7.55,2l.09.16H4.84ZM4,3.32H8.46V4.93H4Zm7.26,1.41V14.8H1.2V4.72H2.82V6.13H9.66V4.72Z" />
          <polygon points="4.73 9.63 3.85 10.51 5.81 12.47 9.43 8.85 8.55 7.96 5.81 10.71 4.73 9.63" />
        </g>
      </g>
    </svg>
  </SvgIcon>
);

Task.propTypes = {
  color: PropTypes.string,
};

Task.defaultProps = {
  color: '#6d6d71',
};

export default Task;
