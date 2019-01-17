import React from 'react';
import PropTypes from 'prop-types';
import SvgIcon from '../SvgIcon';
/* eslint-disable max-len */

const Position = props => (
  <SvgIcon {...props}>
    <svg
      focusable="false"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16.59 15.75"
      width="24px"
      height="24px"
    >
      <g id="Layer_2" data-name="Layer 2">
        <g id="Layer_1-2" data-name="Layer 1">
          <path d="M0,4.09v10.1a1.56,1.56,0,0,0,1.56,1.56H15a1.56,1.56,0,0,0,1.56-1.56V4.09A1.56,1.56,0,0,0,15,2.53h-.12V1.68H13.47v.84H11.54V.72A.72.72,0,0,0,10.82,0H5.77a.72.72,0,0,0-.72.72V2.53H3.12V1.68H1.68v.84H1.56A1.56,1.56,0,0,0,0,4.09ZM6.49,1.43h3.62V2.53H6.49ZM1.43,4H15.16V14.32H1.43Z" />
        </g>
      </g>
    </svg>
  </SvgIcon>
);

Position.propTypes = {
  color: PropTypes.string,
};

Position.defaultProps = {
  color: 'currentColor',
};

export default Position;
