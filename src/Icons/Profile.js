import React from 'react';
import PropTypes from 'prop-types';
import SvgIcon from '../SvgIcon';
/* eslint-disable max-len */

const Profile = props => (
  <SvgIcon {...props}>
    <svg focusable="false"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 14.2 16"
      width="24px"
      height="24px"
    >
      <g id="Layer_2" data-name="Layer 2">
        <g id="Layer_1-2" data-name="Layer 1">
          <path d="M7.1,0a3.62,3.62,0,1,0,3.62,3.62A3.63,3.63,0,0,0,7.1,0Zm0,6A2.35,2.35,0,1,1,9.45,3.62,2.36,2.36,0,0,1,7.1,6Z" />
          <path d="M7.1,9C2.92,9,0,11.19,0,14.31V16H14.2V14.31C14.2,11.19,11.28,9,7.1,9Zm5.52,5.41h-11v-.11c0-2.19,2.27-3.72,5.52-3.72s5.52,1.53,5.52,3.72Z" />
        </g>
      </g>
    </svg>
  </SvgIcon>
);

Profile.propTypes = {
  color: PropTypes.string,
};

Profile.defaultProps = {
  color: '#6d6d71',
};

export default Profile;
