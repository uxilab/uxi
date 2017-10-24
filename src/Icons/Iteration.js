import React, { PropTypes } from 'react';
import SvgIcon from '../SvgIcon';
/* eslint-disable max-len */

const Iteration = props => (
  <SvgIcon {...props}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      width="24px"
      height="24px"
    >
      <g id="Layer_2" data-name="Layer 2">
        <g id="Layer_1-2" data-name="Layer 1">
          <path d="M3.48,3.48A6.39,6.39,0,0,1,14.4,8H16A8,8,0,0,0,2.35,2.35L.8.8V5.6H5.6Z" />
          <path d="M12.52,12.52A6.39,6.39,0,0,1,1.6,8H0a8,8,0,0,0,13.65,5.65L15.2,15.2V10.4H10.4Z" />
        </g>
      </g>
    </svg>
  </SvgIcon>
);

Iteration.propTypes = {
  color: PropTypes.string
};

Iteration.defaultProps = {
  color: '#6d6d71'
};

export default Iteration;
