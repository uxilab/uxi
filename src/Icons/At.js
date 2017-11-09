import React from 'react';
import PropTypes from 'prop-types';
import SvgIcon from '../SvgIcon';
/* eslint-disable max-len */

const At = props => (
  <SvgIcon {...props}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 15.75 15.75"
      width="24px"
      height="24px"
    >
      <g id="Layer_2" data-name="Layer 2">
        <g id="Layer_1-2" data-name="Layer 1">
          <path d="M12.57,11.75v0H13c1.65,0,2.75-1.31,2.75-3.25V7.88a7.86,7.86,0,1,0-3.53,6.57l-.76-1.11A6.53,6.53,0,1,1,14.4,7.88V8.5c0,1.14-.48,1.84-1.29,1.9v0h-.43a1.52,1.52,0,0,1-1.25-1.22V7.88a3.57,3.57,0,1,0-1.1,2.56l.11-.1.08.12A2.87,2.87,0,0,0,12.57,11.75ZM7.88,10.08a2.21,2.21,0,1,1,2.2-2.21A2.21,2.21,0,0,1,7.88,10.08Z" />
        </g>
      </g>
    </svg>
  </SvgIcon>
);

At.propTypes = {
  color: PropTypes.string,
};

At.defaultProps = {
  color: '#6d6d71',
};

export default At;
