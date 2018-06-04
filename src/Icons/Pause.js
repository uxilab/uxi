import React from 'react';
import PropTypes from 'prop-types';
import SvgIcon from '../SvgIcon';
/* eslint-disable max-len */

const Pause = props => (
  <SvgIcon {...props}>
    <svg focusable="false"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 12.29 16"
      width="24px"
      height="24px"
    >
      <g id="Layer_2" data-name="Layer 2">
        <g id="Layer_1-2" data-name="Layer 1">
          <path d="M4.87,1.51A1.51,1.51,0,0,0,3.36,0H1.51A1.51,1.51,0,0,0,0,1.51v13A1.51,1.51,0,0,0,1.51,16H3.36a1.51,1.51,0,0,0,1.51-1.51ZM1.16,14.84V1.16H3.71V14.84Z" />
          <path d="M12.29,1.51A1.51,1.51,0,0,0,10.78,0H8.93A1.51,1.51,0,0,0,7.42,1.51v13A1.51,1.51,0,0,0,8.93,16h1.86a1.51,1.51,0,0,0,1.51-1.51ZM8.58,14.84V1.16h2.55V14.84Z" />
        </g>
      </g>
    </svg>
  </SvgIcon>
);

Pause.propTypes = {
  color: PropTypes.string,
};

Pause.defaultProps = {
  color: '#6d6d71',
};

export default Pause;
