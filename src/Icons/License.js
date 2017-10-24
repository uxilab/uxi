import React, { PropTypes } from 'react';
import SvgIcon from '../SvgIcon';
/* eslint-disable max-len */

const License = props => (
  <SvgIcon {...props}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 11.14"
      width="24px"
      height="24px"
    >
      <g id="Layer_2" data-name="Layer 2">
        <g id="Layer_1-2" data-name="Layer 1">
          <path d="M14.48,0h-13A1.52,1.52,0,0,0,0,1.52v8.1a1.52,1.52,0,0,0,1.52,1.52h13A1.52,1.52,0,0,0,16,9.62V1.52A1.52,1.52,0,0,0,14.48,0ZM1.42,9.72V1.42H14.58v8.3Z" />
          <path
            class="cls-2"
            d="M10.73,4.66a.41.41,0,0,0-.36-.22H9.2L8.37,2.78a.43.43,0,0,0-.74,0L6.8,4.44H5.64a.41.41,0,0,0-.34.64l.84,1.26v0L5.71,8.06a.41.41,0,0,0,.59.47L8,7.67H8l1.68.84a.42.42,0,0,0,.44,0,.41.41,0,0,0,.14-.42L9.86,6.34l.84-1.26A.41.41,0,0,0,10.73,4.66ZM9,6.37l.25,1L8.18,6.84a.42.42,0,0,0-.37,0l-1.09.54.25-1A.42.42,0,0,0,6.93,6l-.52-.77h.64A.41.41,0,0,0,7.43,5L8,3.89,8.57,5a.41.41,0,0,0,.37.23h.64L9.07,6A.42.42,0,0,0,9,6.37Z"
          />
        </g>
      </g>
    </svg>
  </SvgIcon>
);

License.propTypes = {
  color: PropTypes.string
};

License.defaultProps = {
  color: '#6d6d71'
};

export default License;
