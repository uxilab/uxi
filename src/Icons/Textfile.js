import React, { PropTypes } from 'react';
import SvgIcon from '../SvgIcon';
/* eslint-disable max-len */

const Textfile = props => (
  <SvgIcon {...props}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 12.84 15.75"
      width="24px"
      height="24px"
    >
      <g id="Layer_2" data-name="Layer 2">
        <g id="Layer_1-2" data-name="Layer 1">
          <polygon points="9.93 9.2 9.93 6.55 2.91 6.55 2.91 9.2 4.11 9.2 4.11 7.75 5.82 7.75 5.82 11.64 4.36 11.64 4.36 12.84 8.48 12.84 8.48 11.64 7.02 11.64 7.02 7.75 8.73 7.75 8.73 9.2 9.93 9.2" />
          <path d="M1.33,0A1.33,1.33,0,0,0,0,1.33V14.42a1.33,1.33,0,0,0,1.33,1.33H11.51a1.33,1.33,0,0,0,1.33-1.33V3.26L9.58,0ZM11.64,14.55H1.2V1.2H8.73V4.11h2.91Z" />
        </g>
      </g>
    </svg>
  </SvgIcon>
);

Textfile.propTypes = {
  color: PropTypes.string
};

Textfile.defaultProps = {
  color: '#6d6d71'
};

export default Textfile;
