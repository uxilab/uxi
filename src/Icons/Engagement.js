import React from 'react';
import PropTypes from 'prop-types';
import SvgIcon from '../SvgIcon';
/* eslint-disable max-len */

const Engagement = props => (
  <SvgIcon {...props}>
    <svg
      focusable="false"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 17.62 10.65"
      width="24px"
      height="24px"
    >
      <g id="Layer_2" data-name="Layer 2">
        <g id="Layer_1-2" data-name="Layer 1">
          <path d="M17.42,5A9.93,9.93,0,0,0,.2,5L0,5.32l.2.35a9.93,9.93,0,0,0,17.21,0l.2-.35ZM8.81,9.25A8.58,8.58,0,0,1,1.63,5.32,8.53,8.53,0,0,1,16,5.32,8.58,8.58,0,0,1,8.81,9.25Z" />
          <path d="M8.81,2.28a3,3,0,1,0,3,3A3,3,0,0,0,8.81,2.28Zm0,5.08a2,2,0,1,1,2-2A2,2,0,0,1,8.81,7.37Z" />
        </g>
      </g>
    </svg>
  </SvgIcon>
);

Engagement.propTypes = {
  color: PropTypes.string,
};

Engagement.defaultProps = {
  color: '#6d6d71',
};

export default Engagement;
