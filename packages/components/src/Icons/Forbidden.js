import React from 'react';
import PropTypes from 'prop-types';
import SvgIcon from '../SvgIcon';
/* eslint-disable max-len */

const Forbidden = props => (
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
      <path d="M12,.5A11.5,11.5,0,1,0,23.5,12,11.51,11.51,0,0,0,12,.5Zm0,21A9.49,9.49,0,1,1,21.49,12,9.5,9.5,0,0,1,12,21.49Z" />
      <polygon points="17.21 8.23 15.77 6.79 12 10.56 8.23 6.79 6.79 8.23 10.56 12 6.79 15.77 8.23 17.21 12 13.44 15.77 17.21 17.21 15.77 13.44 12 17.21 8.23" />
    </svg>
  </SvgIcon>
);

Forbidden.propTypes = {
  color: PropTypes.string,
};

Forbidden.defaultProps = {
  color: '#6d6d71',
};

export default Forbidden;
