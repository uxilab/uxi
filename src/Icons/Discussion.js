import React from 'react';
import PropTypes from 'prop-types';
import SvgIcon from '../SvgIcon';
/* eslint-disable max-len */

const Discussion = props => (
  <SvgIcon {...props}>
    <svg
      focusable="false"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16.22 16"
      width="24px"
      height="24px"
    >
      <g id="Layer_2" data-name="Layer 2">
        <g id="Layer_1-2" data-name="Layer 1">
          <path d="M16.22,1.18A1.18,1.18,0,0,0,15,0H5.59A1.18,1.18,0,0,0,4.41,1.18V8.27A1.18,1.18,0,0,0,5.59,9.45h5.12l2.68,2a.29.29,0,0,0,.47-.23V9.45H15a1.18,1.18,0,0,0,1.18-1.18ZM15,8.27H12.68V9.45L11.1,8.27H5.59V1.18H15Z" />
          <path d="M11.81,10.9H10.63v1.78H5.12L3.54,13.86V12.68H1.18V5.59H3.3V4.41H1.18A1.18,1.18,0,0,0,0,5.59v7.09a1.18,1.18,0,0,0,1.18,1.18H2.36v1.92a.22.22,0,0,0,.36.18l2.79-2.09h5.12a1.18,1.18,0,0,0,1.18-1.18Z" />
        </g>
      </g>
    </svg>
  </SvgIcon>
);

Discussion.propTypes = {
  color: PropTypes.string,
};

Discussion.defaultProps = {
  color: '#6d6d71',
};

export default Discussion;
