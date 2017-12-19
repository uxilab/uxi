import React from 'react';
import PropTypes from 'prop-types';
import SvgIcon from '../SvgIcon';
/* eslint-disable max-len */

const Merge = props => (
  <SvgIcon {...props}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16.5 16.5"
      width="24px"
      height="24px"
    >
      <g id="Layer_2" data-name="Layer 2">
        <g id="Layer_1-2" data-name="Layer 1">
          <path d="M15.14,4.87H11.63V1.36A1.36,1.36,0,0,0,10.27,0H1.36A1.36,1.36,0,0,0,0,1.36v8.9a1.36,1.36,0,0,0,1.36,1.36H4.87v3.51A1.36,1.36,0,0,0,6.23,16.5h8.9a1.36,1.36,0,0,0,1.36-1.36V6.23A1.36,1.36,0,0,0,15.14,4.87ZM6.31,10.18H1.45V1.45h8.72V6.33H15V15H6.32Z" />
        </g>
      </g>
    </svg>
  </SvgIcon>
);

Merge.propTypes = {
  color: PropTypes.string,
};

Merge.defaultProps = {
  color: '#6d6d71',
};

export default Merge;
