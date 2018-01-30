import React from 'react';
import PropTypes from 'prop-types';
import SvgIcon from '../SvgIcon';
/* eslint-disable max-len */

const Padlock = props => (
  <SvgIcon {...props}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 12.39 16"
      width="24px"
      height="24px"
    >
      <g id="Layer_2" data-name="Layer 2">
        <g id="Layer_1-2" data-name="Layer 1">
          <circle cx="6.2" cy="11.15" r="1.35" />
          <path d="M6.2,0A4.4,4.4,0,0,0,1.8,4.39V6.31H1.69A1.69,1.69,0,0,0,0,8v6.31A1.69,1.69,0,0,0,1.69,16h9a1.69,1.69,0,0,0,1.69-1.69V8A1.69,1.69,0,0,0,10.7,6.31h-.11V4.39A4.4,4.4,0,0,0,6.2,0ZM3.38,4.39A2.82,2.82,0,0,1,9,4.39V6.31H3.38Zm7.44,3.49v6.54H1.58V7.89Z" />
        </g>
      </g>
    </svg>
  </SvgIcon>
);

Padlock.propTypes = {
  color: PropTypes.string,
};

Padlock.defaultProps = {
  color: '#6d6d71',
};

export default Padlock;
