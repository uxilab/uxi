import React from 'react';
import PropTypes from 'prop-types';
import SvgIcon from '../SvgIcon';
/* eslint-disable max-len */

const Close = props => (
  <SvgIcon {...props}>
    <svg
      focusable="false"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      width="24px"
      height="24px"
    >
      <g id="Layer_2" data-name="Layer 2">
        <g id="Layer_1-2" data-name="Layer 1">
          <polygon points="16 1.3 14.7 0 8 6.7 1.3 0 0 1.3 6.7 8 0 14.7 1.3 16 8 9.3 14.7 16 16 14.7 9.3 8 16 1.3" />
        </g>
      </g>
    </svg>
  </SvgIcon>
);

Close.propTypes = {
  color: PropTypes.string,
};

Close.defaultProps = {
  color: 'currentColor',
};

export default Close;
