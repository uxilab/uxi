import React from 'react';
import PropTypes from 'prop-types';
import SvgIcon from '../SvgIcon';
/* eslint-disable max-len */

const Printer = props => (
  <SvgIcon {...props}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 18.57 15.75"
      width="24px"
      height="24px"
    >
      <g id="Layer_2" data-name="Layer 2">
        <g id="Layer_1-2" data-name="Layer 1">
          <path d="M18.57,6.46a1.76,1.76,0,0,0-1.76-1.76h-2V1.29A1.29,1.29,0,0,0,13.52,0H5.05A1.29,1.29,0,0,0,3.77,1.29V4.71h-2A1.76,1.76,0,0,0,0,6.46v3.76A1.76,1.76,0,0,0,1.76,12h2v2.48a1.29,1.29,0,0,0,1.29,1.29h8.47a1.29,1.29,0,0,0,1.29-1.29V12h2a1.76,1.76,0,0,0,1.76-1.76ZM4.93,1.16h8.72V4.71H4.93Zm0,13.43V8.69h8.72v5.9Zm9.88-4.24V7.53h-11v2.82H1.63v-4H16.94v4Z" />
        </g>
      </g>
    </svg>
  </SvgIcon>
);

Printer.propTypes = {
  color: PropTypes.string
};

Printer.defaultProps = {
  color: '#6d6d71'
};

export default Printer;
