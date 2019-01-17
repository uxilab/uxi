import React from 'react';
import PropTypes from 'prop-types';
import SvgIcon from '../SvgIcon';
/* eslint-disable max-len */

const Database = props => (
  <SvgIcon {...props}>
    <svg
      focusable="false"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 14.37 16"
      width="24px"
      height="24px"
    >
      <g id="Layer_2" data-name="Layer 2">
        <g id="Layer_1-2" data-name="Layer 1">
          <path d="M7.19,0C3.62,0,0,1.07,0,3.12v9.75C0,14.93,3.62,16,7.19,16s7.19-1.07,7.19-3.12V3.12C14.37,1.07,10.76,0,7.19,0ZM13,12.88c0,.62-2.21,1.75-5.82,1.75s-5.82-1.13-5.82-1.75V11.53l.19.1a12.8,12.8,0,0,0,5.63,1.12,12.8,12.8,0,0,0,5.63-1.12l.19-.1Zm0-3.25c0,.62-2.21,1.75-5.82,1.75S1.37,10.24,1.37,9.63V8.28l.19.1A12.82,12.82,0,0,0,7.19,9.5a12.82,12.82,0,0,0,5.63-1.12l.19-.1Zm0-3.25C13,7,10.79,8.13,7.19,8.13S1.37,7,1.37,6.38V5l.19.1A12.81,12.81,0,0,0,7.19,6.25a12.81,12.81,0,0,0,5.63-1.12L13,5ZM7.19,4.88c-3.61,0-5.82-1.13-5.82-1.75S3.58,1.37,7.19,1.37,13,2.51,13,3.12,10.79,4.88,7.19,4.88Z" />
        </g>
      </g>
    </svg>
  </SvgIcon>
);

Database.propTypes = {
  color: PropTypes.string,
};

Database.defaultProps = {
  color: 'currentColor',
};

export default Database;
