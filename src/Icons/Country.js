import React from 'react';
import PropTypes from 'prop-types';
import SvgIcon from '../SvgIcon';
/* eslint-disable max-len */

const Country = props => (
  <SvgIcon {...props}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 13 16"
      width="24px"
      height="24px"
    >
      <g id="Layer_2" data-name="Layer 2">
        <g id="Layer_1-2" data-name="Layer 1">
          <path d="M7.51.34A5.06,5.06,0,1,0,12.57,5.4,5.07,5.07,0,0,0,7.51.34Zm0,9.14A4.08,4.08,0,1,1,11.59,5.4,4.08,4.08,0,0,1,7.51,9.48Z" />
          <path d="M12.81,10.71a.64.64,0,0,0-.91-.91A6.22,6.22,0,0,1,3,1.09.64.64,0,1,0,2.1.2,7.5,7.5,0,0,0,6.9,12.88v1.83H5.5A.64.64,0,0,0,5.5,16H9.6a.64.64,0,0,0,0-1.29H8.19V12.87A7.45,7.45,0,0,0,12.81,10.71Z" />
        </g>
      </g>
    </svg>
  </SvgIcon>
);

Country.propTypes = {
  color: PropTypes.string
};

Country.defaultProps = {
  color: '#6d6d71'
};

export default Country;
