import React from 'react';
import PropTypes from 'prop-types';
import SvgIcon from '../SvgIcon';
/* eslint-disable max-len */

const Circle = props => (
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
          <path d="M7.88,0a7.88,7.88,0,1,0,7.88,7.88A7.88,7.88,0,0,0,7.88,0Zm0,14.22a6.35,6.35,0,1,1,6.35-6.35A6.35,6.35,0,0,1,7.88,14.22Z" />
        </g>
      </g>
    </svg>
  </SvgIcon>
);

Circle.propTypes = {
  color: PropTypes.string,
};

Circle.defaultProps = {
  color: 'currentColor',
};

export default Circle;
