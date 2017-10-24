import React, { PropTypes } from 'react';
import SvgIcon from '../SvgIcon';
/* eslint-disable max-len */

const Spreadsheet = props => (
  <SvgIcon {...props}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 12.72 16"
      width="24px"
      height="24px"
    >
      <g id="Layer_2" data-name="Layer 2">
        <g id="Layer_1-2" data-name="Layer 1">
          <path d="M9.07,0H1.43A1.44,1.44,0,0,0,0,1.43V14.57A1.44,1.44,0,0,0,1.43,16h9.85a1.44,1.44,0,0,0,1.43-1.43V3.64ZM8.21,1.23V4.51h3.28v3H1.23V1.23Zm-7,10V8.35H5.94v2.93ZM6.77,8.35h4.72v2.93H6.77ZM1.23,14.77V12.11H11.49v2.67Z" />
        </g>
      </g>
    </svg>
  </SvgIcon>
);

Spreadsheet.propTypes = {
  color: PropTypes.string
};

Spreadsheet.defaultProps = {
  color: '#6d6d71'
};

export default Spreadsheet;
