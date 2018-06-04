import React from 'react';
import PropTypes from 'prop-types';
import SvgIcon from '../SvgIcon';
/* eslint-disable max-len */

const Start = props => (
  <SvgIcon {...props}>
    <svg focusable="false"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 13.94 16"
      width="24px"
      height="24px"
    >
      <g id="Layer_2" data-name="Layer 2">
        <g id="Layer_1-2" data-name="Layer 1">
          <path d="M0,.82V15.18a.81.81,0,0,0,.41.71.8.8,0,0,0,.82,0L13.54,8.7a.81.81,0,0,0,0-1.41L1.23.11A.82.82,0,0,0,.82,0,.82.82,0,0,0,.41.11.81.81,0,0,0,0,.82ZM1.55,2.1,11.66,8,1.55,13.9Z" />
        </g>
      </g>
    </svg>
  </SvgIcon>
);

Start.propTypes = {
  color: PropTypes.string,
};

Start.defaultProps = {
  color: '#6d6d71',
};

export default Start;
