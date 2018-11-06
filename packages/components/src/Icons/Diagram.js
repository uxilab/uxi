import React from 'react';
import PropTypes from 'prop-types';
import SvgIcon from '../SvgIcon';
/* eslint-disable max-len */

const Diagram = props => (
  <SvgIcon {...props}>
    <svg
      focusable="false"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 17.4 17.4"
      width="24px"
      height="24px"
    >
      <g id="Layer_2" data-name="Layer 2">
        <g id="Layer_1-2" data-name="Layer 1">
          <path d="M8.7,0a8.7,8.7,0,1,0,8.7,8.7A8.71,8.71,0,0,0,8.7,0ZM16,8.31H9.3V1.43A7.3,7.3,0,0,1,16,8.31ZM8.7,16A7.3,7.3,0,0,1,8.1,1.43V9.51H16A7.31,7.31,0,0,1,8.7,16Z" />
        </g>
      </g>
    </svg>
  </SvgIcon>
);

Diagram.propTypes = {
  color: PropTypes.string,
};

Diagram.defaultProps = {
  color: '#6d6d71',
};

export default Diagram;
