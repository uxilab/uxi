import React from 'react';
import PropTypes from 'prop-types';
import SvgIcon from '../SvgIcon';
/* eslint-disable max-len */

const Rule = props => (
  <SvgIcon {...props}>
    <svg
      focusable="false"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 12.72 16"
      width="24px"
      height="24px"
    >
      <g id="Layer_2" data-name="Layer 2">
        <g id="Layer_1-2" data-name="Layer 1">
          <path d="M9.07,0H1.43A1.43,1.43,0,0,0,0,1.43V14.57A1.43,1.43,0,0,0,1.43,16h9.85a1.44,1.44,0,0,0,1.44-1.43V3.64ZM1.23,14.77V1.23h7V4.51h3.28V14.77Z" />
          <polygon points="2.79 8.14 3.54 7.4 4.28 8.14 4.81 7.61 4.07 6.87 4.81 6.12 4.28 5.59 3.54 6.34 2.79 5.59 2.26 6.12 3.01 6.87 2.26 7.61 2.79 8.14" />
          <polygon points="3.48 11.14 2.79 10.45 2.26 10.98 3.48 12.2 5.18 10.51 4.65 9.98 3.48 11.14" />
          <rect x="6.66" y="6.29" width="3.61" height="1" />
          <rect x="6.66" y="10.46" width="3.61" height="1" />
        </g>
      </g>
    </svg>
  </SvgIcon>
);

Rule.propTypes = {
  color: PropTypes.string,
};

Rule.defaultProps = {
  color: 'currentColor',
};

export default Rule;
