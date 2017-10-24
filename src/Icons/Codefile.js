import React, { PropTypes } from 'react';
import SvgIcon from '../SvgIcon';
/* eslint-disable max-len */

const Codefile = props => (
  <SvgIcon {...props}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 12.84 15.75"
      width="24px"
      height="24px"
    >
      <g id="Layer_2" data-name="Layer 2">
        <g id="Layer_1-2" data-name="Layer 1">
          <path d="M4.89,8a.44.44,0,0,0,0-.62.44.44,0,0,0-.62,0l-1.9,2a.44.44,0,0,0,0,.61l1.9,2a.45.45,0,0,0,.26.13v0h.06a.46.46,0,0,0,.3-.12.44.44,0,0,0,0-.62L3.26,9.77,4.87,8Z" />
          <path d="M10.5,9.45l-1.9-2a.45.45,0,0,0-.62,0,.44.44,0,0,0-.14.3A.43.43,0,0,0,8,8L9.57,9.76,8,11.49a.42.42,0,0,0-.12.3.44.44,0,0,0,.44.44.47.47,0,0,0,.32-.15l1.9-2A.44.44,0,0,0,10.5,9.45Z" />
          <path d="M7.27,5.55a.42.42,0,0,0-.33.06.44.44,0,0,0-.19.28L5.23,13.31a.41.41,0,0,0,.06.33.44.44,0,0,0,.28.19h.1a.43.43,0,0,0,.43-.35L7.61,6.07A.44.44,0,0,0,7.27,5.55Z" />
          <path d="M1.33,0A1.33,1.33,0,0,0,0,1.33V14.42a1.33,1.33,0,0,0,1.33,1.33H11.51a1.33,1.33,0,0,0,1.33-1.33V3.26L9.58,0ZM11.64,14.55H1.2V1.2H8.73V4.11h2.91Z" />
        </g>
      </g>
    </svg>
  </SvgIcon>
);

Codefile.propTypes = {
  color: PropTypes.string
};

Codefile.defaultProps = {
  color: '#6d6d71'
};

export default Codefile;
