import React from 'react';
import PropTypes from 'prop-types';
import SvgIcon from '../SvgIcon';
/* eslint-disable max-len */

const Report = props => (
  <SvgIcon {...props}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      width="24px"
      height="24px"
    >
      <g id="Layer_2" data-name="Layer 2">
        <g id="Layer_1-2" data-name="Layer 1">
          <path d="M14.49,0h-13A1.51,1.51,0,0,0,0,1.51v13A1.51,1.51,0,0,0,1.51,16h13A1.51,1.51,0,0,0,16,14.49v-13A1.51,1.51,0,0,0,14.49,0Zm.11,14.6H1.4V12.77l0,0C2,12.29,3.2,11,6.2,8l.08-.08L6.36,8l2.81,2.81L14.6,5.39Zm0-10.93,0,0L9.17,9.1,6.27,6.21l-.43.43L1.59,10.92l-.19.19V1.4H14.6Z" />
        </g>
      </g>
    </svg>
  </SvgIcon>
);

Report.propTypes = {
  color: PropTypes.string,
};

Report.defaultProps = {
  color: '#6d6d71',
};

export default Report;
