import React, { PropTypes } from 'react';
import SvgIcon from '../SvgIcon';
/* eslint-disable max-len */

const Sourcebranch = props => (
  <SvgIcon {...props}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 14.63 16"
      width="24px"
      height="24px"
    >
      <g id="Layer_2" data-name="Layer 2">
        <g id="Layer_1-2" data-name="Layer 1">
          <path d="M14.63,1.84a1.84,1.84,0,1,0-2.4,1.75V5.36a.79.79,0,0,1-.31.63L8.3,8.75A.19.19,0,0,1,8,8.6V6.17a1.84,1.84,0,1,0-1.25,0V8.61a.19.19,0,0,1-.3.15L2.83,6a.8.8,0,0,1-.32-.64V3.56a1.85,1.85,0,1,0-1.25,0V5.82a1.2,1.2,0,0,0,.48,1l4.82,3.64a.49.49,0,0,1,.19.39v1.63a1.84,1.84,0,1,0,1.25,0V10.76a.41.41,0,0,1,.16-.33l4.75-3.63a1.45,1.45,0,0,0,.57-1.15V3.55A1.84,1.84,0,0,0,14.63,1.84Z" />
        </g>
      </g>
    </svg>
  </SvgIcon>
);

Sourcebranch.propTypes = {
  color: PropTypes.string
};

Sourcebranch.defaultProps = {
  color: '#6d6d71'
};

export default Sourcebranch;
