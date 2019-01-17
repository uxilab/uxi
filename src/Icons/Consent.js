import React from 'react';
import PropTypes from 'prop-types';
import SvgIcon from '../SvgIcon';
/* eslint-disable max-len */

const Consent = props => (
  <SvgIcon {...props}>
    <svg
      focusable="false"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16.55 15.75"
      width="24px"
      height="24px"
    >
      <g id="Layer_2" data-name="Layer 2">
        <g id="Layer_1-2" data-name="Layer 1">
          <polygon points="10 4.09 9.12 4.97 11.07 6.93 14.7 3.3 13.82 2.42 11.07 5.16 10 4.09" />
          <path d="M4.67,12.55h7.88V11.2h-8V2.4H3.2v8.68A1.47,1.47,0,0,0,4.67,12.55Z" />
          <path d="M1.47,15.75H9.35V14.4h-8V5.6H0v8.68A1.47,1.47,0,0,0,1.47,15.75Z" />
          <path d="M15.07,0H7.88A1.47,1.47,0,0,0,6.4,1.47V7.88A1.47,1.47,0,0,0,7.88,9.35h7.19a1.47,1.47,0,0,0,1.48-1.47V1.47A1.47,1.47,0,0,0,15.07,0ZM7.75,8V1.35H15.2V8Z" />
        </g>
      </g>
    </svg>
  </SvgIcon>
);

Consent.propTypes = {
  color: PropTypes.string,
};

Consent.defaultProps = {
  color: 'currentColor',
};

export default Consent;
