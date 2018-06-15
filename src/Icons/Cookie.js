import React from 'react';
import PropTypes from 'prop-types';
import SvgIcon from '../SvgIcon';
/* eslint-disable max-len */

const Cookie = props => (
  <SvgIcon {...props}>
    <svg
      focusable="false"
      id="Layer_1"
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="24px"
      height="24px"
    >
      <path d="M.5,12A11.5,11.5,0,1,0,12,.5,11.51,11.51,0,0,0,.5,12Zm2,0A9.49,9.49,0,1,1,12,21.49,9.5,9.5,0,0,1,2.51,12Z" />
      <circle className="cls-2" cx="10.06" cy="8.01" r="1.5" />
      <circle className="cls-2" cx="16.06" cy="10.62" r="2.46" />
    </svg>
  </SvgIcon>
);

Cookie.propTypes = {
  color: PropTypes.string,
};

Cookie.defaultProps = {
  color: '#6d6d71',
};

export default Cookie;
