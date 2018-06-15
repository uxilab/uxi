import React from 'react';
import PropTypes from 'prop-types';
import SvgIcon from '../SvgIcon';
/* eslint-disable max-len */

const Cloud = props => (
  <SvgIcon {...props}>
    <svg
      focusable="false"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16.89 11.75"
      width="24px"
      height="24px"
    >
      <g id="Layer_2" data-name="Layer 2">
        <g id="Layer_1-2" data-name="Layer 1">
          <path d="M4.16,11.75H11a5.88,5.88,0,1,0-5.4-8.18l0,.11-.11,0a4.09,4.09,0,0,0-1.3-.21,4.16,4.16,0,1,0,0,8.32Zm0-6.86a2.69,2.69,0,0,1,1.46.43.73.73,0,0,0,1.11-.45A4.41,4.41,0,1,1,11,10.29H4.16a2.7,2.7,0,0,1,0-5.39Z" />
        </g>
      </g>
    </svg>
  </SvgIcon>
);

Cloud.propTypes = {
  color: PropTypes.string,
};

Cloud.defaultProps = {
  color: '#6d6d71',
};

export default Cloud;
