import React from 'react';
import PropTypes from 'prop-types';
import SvgIcon from '../SvgIcon';
/* eslint-disable max-len */

const Changeview = props => (
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
          <path d="M16,1.6A1.6,1.6,0,0,0,14.4,0H1.6A1.6,1.6,0,0,0,0,1.6V14.4A1.6,1.6,0,0,0,1.6,16H14.4A1.6,1.6,0,0,0,16,14.4Zm-8.5,13H1.37V8.5H7.5Zm0-7.13H1.37V1.37H7.5Zm7.13,7.13H8.5V8.5h6.13Zm0-7.13H8.5V1.37h6.13Z" />
        </g>
      </g>
    </svg>
  </SvgIcon>
);

Changeview.propTypes = {
  color: PropTypes.string,
};

Changeview.defaultProps = {
  color: '#6d6d71',
};

export default Changeview;
