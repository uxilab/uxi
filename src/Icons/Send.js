import React from 'react';
import PropTypes from 'prop-types';
import SvgIcon from '../SvgIcon';
/* eslint-disable max-len */

const Send = props => (
  <SvgIcon {...props}>
    <svg
      focusable="false"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 21.25 21.25"
      width="24px"
      height="24px"
    >
      <g id="Layer_2" data-name="Layer 2">
        <g id="icons">
          <path d="M16.54,13.15l0-.05c1.08-2.81,2.56-6.66,4.63-11.9A.88.88,0,0,0,21,.26a.87.87,0,0,0-.94-.2c-5.14,2-9,3.49-11.74,4.56l-.17.07C2.66,6.79,1.19,7.35.5,8A1.65,1.65,0,0,0,0,9.44a1.88,1.88,0,0,0,1.41,1.63l7,1.75,1.75,7a1.86,1.86,0,0,0,1.62,1.41,1.62,1.62,0,0,0,1.41-.48C13.9,20.06,14.46,18.6,16.54,13.15Zm-7.73-2L1.68,9.29l.24-.15a59.22,59.22,0,0,1,6.81-2.8l.15-.06c1.94-.75,4.35-1.67,7.35-2.84l.56-.22L8.88,11.13Zm3.12,8.49-1.81-7.23.05,0L18,4.46,17.81,5c-1.13,2.89-2,5.24-2.75,7.13l-.14.37a58.32,58.32,0,0,1-2.84,6.87Z" />
        </g>
      </g>
    </svg>
  </SvgIcon>
);

Send.propTypes = {
  color: PropTypes.string,
};

Send.defaultProps = {
  color: '#6d6d71',
};

export default Send;
