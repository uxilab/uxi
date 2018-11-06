import React from 'react';
import PropTypes from 'prop-types';
import SvgIcon from '../SvgIcon';
/* eslint-disable max-len */

const File = props => (
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
          <path d="M12.72,3.64,9.07,0H1.43A1.44,1.44,0,0,0,0,1.43V14.57A1.44,1.44,0,0,0,1.43,16h9.85a1.44,1.44,0,0,0,1.43-1.43ZM1.23,14.77V1.23h7V4.51h3.28V14.77Z" />
        </g>
      </g>
    </svg>
  </SvgIcon>
);

File.propTypes = {
  color: PropTypes.string,
};

File.defaultProps = {
  color: '#6d6d71',
};

export default File;
