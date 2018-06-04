import React from 'react';
import PropTypes from 'prop-types';
import SvgIcon from '../SvgIcon';
/* eslint-disable max-len */

const Announcement = props => (
  <SvgIcon {...props}>
    <svg focusable="false"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 13.57"
      width="24px"
      height="24px"
    >
      <g id="Layer_2" data-name="Layer 2">
        <g id="Layer_1-2" data-name="Layer 1">
          <path d="M16,12.76V0H14.58V1L14.5,1,1.42,3.88V3.24H0V9.52H1.42V8.88l1,.23v2.94a.71.71,0,0,0,.54.69l3.24.81a.72.72,0,0,0,.74-.26l2-2.72,5.6,1.24v1Zm-9.9-.7L3.85,11.5V9.42l3.62.8Zm8.36-1.73-13-2.9V5.33l.08,0L14.58,2.4v8Z" />
        </g>
      </g>
    </svg>
  </SvgIcon>
);

Announcement.propTypes = {
  color: PropTypes.string,
};

Announcement.defaultProps = {
  color: '#6d6d71',
};

export default Announcement;
