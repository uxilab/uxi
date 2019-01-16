import React from 'react';
import PropTypes from 'prop-types';
import SvgIcon from '../SvgIcon';
/* eslint-disable max-len */

const Smileyneutral = props => (
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
          <rect
            x="4.7"
            y="10.07"
            width="6.36"
            height="1.3"
            transform="translate(-0.1 0.07) rotate(-0.52)"
          />
        </g>
      </g>
    </svg>
  </SvgIcon>
);

Smileyneutral.propTypes = {
  color: PropTypes.string,
};

Smileyneutral.defaultProps = {
  color: '#6d6d71',
};

export default Smileyneutral;
