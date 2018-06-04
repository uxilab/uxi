import React from 'react';
import PropTypes from 'prop-types';
import SvgIcon from '../SvgIcon';
/* eslint-disable max-len */

const Slack = props => (
  <SvgIcon {...props}>
    <svg focusable="false"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      width="24px"
      height="24px"
    >
      <g id="Layer_2" data-name="Layer 2">
        <g id="Layer_1-2" data-name="Layer 1">
          <rect
            x="6.96"
            y="6.96"
            width="2.05"
            height="2.01"
            transform="translate(-2.12 2.97) rotate(-18.6)"
          />
          <path d="M8,0a8,8,0,1,0,8,8A8,8,0,0,0,8,0Zm4.49,9.4-.95.32.33,1a.89.89,0,1,1-1.69.57l-.33-1-1.95.66.33,1a.89.89,0,1,1-1.69.57l-.33-1-.9.3a.89.89,0,0,1-.57-1.69l.9-.3L5,7.91l-.93.31a.89.89,0,0,1-.57-1.69l.93-.31-.31-.91a.89.89,0,1,1,1.69-.57l.31.91L8.07,5l-.31-.92A.89.89,0,1,1,9.45,3.5l.31.92.92-.31a.89.89,0,0,1,.57,1.69l-.92.31L11,8l.95-.32a.89.89,0,0,1,.57,1.69Z" />
        </g>
      </g>
    </svg>
  </SvgIcon>
);

Slack.propTypes = {
  color: PropTypes.string,
};

Slack.defaultProps = {
  color: '#6d6d71',
};

export default Slack;
