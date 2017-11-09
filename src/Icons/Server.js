import React from 'react';
import PropTypes from 'prop-types';
import SvgIcon from '../SvgIcon';
/* eslint-disable max-len */

const Server = props => (
  <SvgIcon {...props}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      width="24px"
      height="24px"
    >
      <g id="Layer_2" data-name="Layer 2">
        <g id="Layer_1-2" data-name="Layer 1">
          <path d="M16,1.5A1.5,1.5,0,0,0,14.5,0H1.5A1.5,1.5,0,0,0,0,1.5V9.63a1.5,1.5,0,0,0,1.5,1.5H7.31v3.5H3.25V16h9.5V14.63H8.69v-3.5H14.5A1.5,1.5,0,0,0,16,9.63ZM14.63,9.75H1.37V6.25H14.63Zm0-4.88H1.37V1.37H14.63Z" />
          <circle cx="3.86" cy="3.12" r="0.81" />
          <circle cx="3.86" cy="8" r="0.81" />
        </g>
      </g>
    </svg>
  </SvgIcon>
);

Server.propTypes = {
  color: PropTypes.string,
};

Server.defaultProps = {
  color: '#6d6d71',
};

export default Server;
