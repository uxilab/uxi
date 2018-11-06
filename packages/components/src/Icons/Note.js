import React from 'react';
import PropTypes from 'prop-types';
import SvgIcon from '../SvgIcon';
/* eslint-disable max-len */

const Note = props => (
  <SvgIcon {...props}>
    <svg
      focusable="false"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 12.32 16"
      width="24px"
      height="24px"
    >
      <g id="Layer_2" data-name="Layer 2">
        <g id="Layer_1-2" data-name="Layer 1">
          <path d="M0,5.79v9.57A.64.64,0,0,0,.64,16h9.57a.64.64,0,0,0,.45-.19l1.47-1.47a.64.64,0,0,0,.19-.45V5.79a.64.64,0,0,0-.64-.64H8.1V6.43H11v6.82H9.57v1.47H1.28V6.43H3.48V5.15H.64A.64.64,0,0,0,0,5.79Z" />
          <rect x="2.95" y="8.1" width="6.43" height="1.28" />
          <rect x="2.95" y="11.04" width="6.43" height="1.28" />
          <path d="M5.79,7.17a.64.64,0,0,0,.64-.64V4.11l.07,0a2.11,2.11,0,1,0-1.41,0l.07,0V6.53A.64.64,0,0,0,5.79,7.17Z" />
        </g>
      </g>
    </svg>
  </SvgIcon>
);

Note.propTypes = {
  color: PropTypes.string,
};

Note.defaultProps = {
  color: '#6d6d71',
};

export default Note;
