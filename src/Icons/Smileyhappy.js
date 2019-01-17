import React from 'react';
import PropTypes from 'prop-types';
import SvgIcon from '../SvgIcon';
/* eslint-disable max-len */

const Smileyhappy = props => (
  <SvgIcon {...props}>
    <svg
      focusable="false"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 15.75 15.75"
      width="24px"
      height="24px"
    >
      <g id="Layer_2" data-name="Layer 2">
        <g id="Layer_1-2" data-name="Layer 1">
          <path d="M7.88,0a7.88,7.88,0,1,0,7.87,7.88A7.88,7.88,0,0,0,7.88,0Zm0,14.22a6.35,6.35,0,1,1,6.34-6.34A6.35,6.35,0,0,1,7.88,14.22Z" />
          <circle cx="5.57" cy="6.63" r="1.5" />
          <circle cx="10.18" cy="6.63" r="1.5" />
          <path d="M5.22,9.64l-.06-.07-.86,1a5.09,5.09,0,0,0,7.22,0l-.92-.91A3.91,3.91,0,0,1,5.22,9.64Z" />
        </g>
      </g>
    </svg>
  </SvgIcon>
);

Smileyhappy.propTypes = {
  color: PropTypes.string,
};

Smileyhappy.defaultProps = {
  color: 'currentColor',
};

export default Smileyhappy;
