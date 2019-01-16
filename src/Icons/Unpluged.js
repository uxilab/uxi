import React from 'react';
import PropTypes from 'prop-types';
import SvgIcon from '../SvgIcon';
/* eslint-disable max-len */

const Unpluged = props => (
  <SvgIcon {...props}>
    <svg
      focusable="false"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16.1 16.66"
      width="24px"
      height="24px"
    >
      <g id="Layer_2" data-name="Layer 2">
        <g id="Layer_1-2" data-name="Layer 1">
          <rect width="16.1" height="1.3" />
          <path d="M10.75,4.52V2.68a.65.65,0,0,0-1.3,0V4.52a.68.68,0,0,0,0,.14H6.63a.7.7,0,0,0,0-.14V2.68a.65.65,0,1,0-1.3,0V4.52a.68.68,0,0,0,0,.14H2.05V8.43a6,6,0,0,0,5.41,6l0,2.26,1.3,0,0-2.25a6,6,0,0,0,5.29-6V4.66H10.72A.7.7,0,0,0,10.75,4.52Zm2,3.91a4.7,4.7,0,1,1-9.4,0V6h9.4Z" />
        </g>
      </g>
    </svg>
  </SvgIcon>
);

Unpluged.propTypes = {
  color: PropTypes.string,
};

Unpluged.defaultProps = {
  color: '#6d6d71',
};

export default Unpluged;
