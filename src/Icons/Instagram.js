import React from 'react';
import PropTypes from 'prop-types';
import SvgIcon from '../SvgIcon';
/* eslint-disable max-len */

const Instagram = props => (
  <SvgIcon {...props}>
    <svg
      focusable="false"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      width="24px"
      height="24px"
    >
      <g id="Layer_2" data-name="Layer 2">
        <g id="Layer_1-2" data-name="Layer 1">
          <polygon points="11.3 6.25 11.3 4.97 11.3 4.78 11.11 4.78 9.83 4.78 9.83 6.25 11.3 6.25" />
          <path d="M8,9.65A1.53,1.53,0,1,0,6.43,8.12,1.53,1.53,0,0,0,8,9.65Z" />
          <path d="M8,0a8,8,0,1,0,8,8A8,8,0,0,0,8,0Zm4.31,7.23v3.56a1.68,1.68,0,0,1-1.68,1.68H5.29a1.68,1.68,0,0,1-1.68-1.68V5.45A1.68,1.68,0,0,1,5.29,3.77h5.34a1.68,1.68,0,0,1,1.68,1.68Z" />
          <path d="M10.34,8.12a2.38,2.38,0,1,1-4.58-.89H4.46v3.56a.83.83,0,0,0,.83.83h5.34a.83.83,0,0,0,.83-.83V7.23h-1.3A2.36,2.36,0,0,1,10.34,8.12Z" />
        </g>
      </g>
    </svg>
  </SvgIcon>
);

Instagram.propTypes = {
  color: PropTypes.string
};

Instagram.defaultProps = {
  color: '#6d6d71'
};

export default Instagram;
