import React, { PropTypes } from 'react';
import SvgIcon from '../SvgIcon';
/* eslint-disable max-len */

const Barchart = props => (
  <SvgIcon {...props}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 10.33"
      width="24px"
      height="24px"
    >
      <g id="Layer_2" data-name="Layer 2">
        <g id="Layer_1-2" data-name="Layer 1">
          <path d="M16,4.76a.71.71,0,0,0-.71-.71H11.14V.71A.71.71,0,0,0,10.43,0H5.57a.71.71,0,0,0-.71.71V3.24H.71A.71.71,0,0,0,0,3.95V9.62a.71.71,0,0,0,.71.71H15.29A.71.71,0,0,0,16,9.62ZM4.86,8.91H1.42V4.66H4.86Zm4.86,0H6.28V1.42H9.72Zm4.86,0H11.14V5.47h3.44Z" />
        </g>
      </g>
    </svg>
  </SvgIcon>
);

Barchart.propTypes = {
  color: PropTypes.string
};

Barchart.defaultProps = {
  color: '#6d6d71'
};

export default Barchart;
