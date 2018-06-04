import React from 'react';
import PropTypes from 'prop-types';
import SvgIcon from '../SvgIcon';
/* eslint-disable max-len */

const Photo = props => (
  <SvgIcon {...props}>
    <svg focusable="false"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 14.38"
      width="24px"
      height="24px"
    >
      <g id="Layer_2" data-name="Layer 2">
        <g id="Layer_1-2" data-name="Layer 1">
          <path d="M8,4.06A3.94,3.94,0,1,0,11.94,8,3.95,3.95,0,0,0,8,4.06Zm0,6.49A2.55,2.55,0,1,1,10.55,8,2.55,2.55,0,0,1,8,10.55Z" />
          <path d="M4.38,2.43H1.51A1.51,1.51,0,0,0,0,3.94v8.92a1.51,1.51,0,0,0,1.51,1.51h13A1.51,1.51,0,0,0,16,12.87V3.94a1.51,1.51,0,0,0-1.51-1.51H11.62L10.44.67A1.51,1.51,0,0,0,9.19,0H6.81A1.51,1.51,0,0,0,5.56.67Zm2.37-1h2.5l1.62,2.43H14.6V13H1.4V3.83H5.13Z" />
        </g>
      </g>
    </svg>
  </SvgIcon>
);

Photo.propTypes = {
  color: PropTypes.string,
};

Photo.defaultProps = {
  color: '#6d6d71',
};

export default Photo;
