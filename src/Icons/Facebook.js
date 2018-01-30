import React from 'react';
import PropTypes from 'prop-types';
import SvgIcon from '../SvgIcon';
/* eslint-disable max-len */

const Facebook = props => (
  <SvgIcon {...props}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      width="24px"
      height="24px"
    >
      <g id="Layer_2" data-name="Layer 2">
        <g id="Layer_1-2" data-name="Layer 1">
          <path d="M8,0a8,8,0,1,0,8,8A8,8,0,0,0,8,0Zm2.12,8H8.73v4.94H6.68V8h-1V6.26h1V5.13A1.93,1.93,0,0,1,8.75,3.05h1.52v1.7H9.17a.42.42,0,0,0-.44.48v1H10.3Z" />
        </g>
      </g>
    </svg>
  </SvgIcon>
);

Facebook.propTypes = {
  color: PropTypes.string,
};

Facebook.defaultProps = {
  color: '#6d6d71',
};

export default Facebook;
