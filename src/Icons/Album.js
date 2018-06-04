import React from 'react';
import PropTypes from 'prop-types';
import SvgIcon from '../SvgIcon';
/* eslint-disable max-len */

const Album = props => (
  <SvgIcon {...props}>
    <svg focusable="false"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16.55 15.75"
      width="24px"
      height="24px"
    >
      <g id="Layer_2" data-name="Layer 2">
        <g id="Layer_1-2" data-name="Layer 1">
          <polygon points="10.98 6.31 10.06 4.83 8.68 7.07 14.28 7.07 12.39 4.05 10.98 6.31" />
          <path d="M4.67,12.55h7.88V11.2h-8V2.4H3.2v8.67A1.48,1.48,0,0,0,4.67,12.55Z" />
          <path d="M1.47,15.75H9.35V14.4h-8V5.6H0v8.68A1.48,1.48,0,0,0,1.47,15.75Z" />
          <path d="M15.07,0H7.88A1.48,1.48,0,0,0,6.4,1.47v6.4A1.48,1.48,0,0,0,7.88,9.35h7.2a1.48,1.48,0,0,0,1.48-1.47V1.47A1.48,1.48,0,0,0,15.07,0ZM7.75,8V1.35H15.2V8Z" />
        </g>
      </g>
    </svg>
  </SvgIcon>
);

Album.propTypes = {
  color: PropTypes.string,
};

Album.defaultProps = {
  color: '#6d6d71',
};

export default Album;
