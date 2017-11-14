import React from 'react';
import PropTypes from 'prop-types';
import SvgIcon from '../SvgIcon';
/* eslint-disable max-len */

const Linkedin = props => (
  <SvgIcon {...props}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      width="24px"
      height="24px"
    >
      <g id="Layer_2" data-name="Layer 2">
        <g id="Layer_1-2" data-name="Layer 1">
          <path d="M8,0a8,8,0,1,0,8,8A8,8,0,0,0,8,0ZM5.92,11.91H3.85V6.7H5.92Zm-1-6a1,1,0,0,1-1-.93,1,1,0,0,1,1-.93,1,1,0,0,1,1,.93A1,1,0,0,1,4.88,5.94Zm7.29,6H10.5V8.74a.94.94,0,0,0-.91-.84,1,1,0,0,0-1,.8v3.2H6.94L7,6.68H8.6v.66a1.64,1.64,0,0,1,1.62-.86c1.28,0,1.86.73,2,2.11Z" />
        </g>
      </g>
    </svg>
  </SvgIcon>
);

Linkedin.propTypes = {
  color: PropTypes.string
};

Linkedin.defaultProps = {
  color: '#6d6d71'
};

export default Linkedin;
