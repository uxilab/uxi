import React from 'react';
import PropTypes from 'prop-types';
import SvgIcon from '../SvgIcon';
/* eslint-disable max-len */

const Contact = props => (
  <SvgIcon {...props}>
    <svg
      focusable="false"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16.73 16"
      width="24px"
      height="24px"
    >
      <g id="Layer_2" data-name="Layer 2">
        <g id="Layer_1-2" data-name="Layer 1">
          <path d="M7.1,0a3.62,3.62,0,1,0,3.62,3.62A3.63,3.63,0,0,0,7.1,0Zm0,6A2.35,2.35,0,1,1,9.45,3.62,2.36,2.36,0,0,1,7.1,6Z" />
          <path d="M0,16H9.52V14.42H1.58v-.11c0-2.19,2.27-3.72,5.52-3.72a8.55,8.55,0,0,1,2.42.33V9.29A10.46,10.46,0,0,0,7.1,9C2.92,9,0,11.19,0,14.31Z" />
          <polygon points="16.73 11.72 14.03 11.72 14.03 9.01 12.45 9.01 12.45 11.72 9.75 11.72 9.75 13.3 12.45 13.3 12.45 16 14.03 16 14.03 13.3 16.73 13.3 16.73 11.72" />
        </g>
      </g>
    </svg>
  </SvgIcon>
);

Contact.propTypes = {
  color: PropTypes.string
};

Contact.defaultProps = {
  color: '#6d6d71'
};

export default Contact;
