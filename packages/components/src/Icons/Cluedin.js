import React from 'react';
import PropTypes from 'prop-types';
import SvgIcon from '../SvgIcon';
/* eslint-disable max-len */

const Cluedin = props => (
  <SvgIcon {...props}>
    <svg
      focusable="false"
      id="Layer_1"
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20.2 23.8"
      width="24px"
      height="24px"
    >
      <g id="Layer_2" data-name="Layer 2">
        <g id="Layer_1-2" data-name="Layer 1-2">
          <path
            d="M17.89,16a.51.51,0,0,0-.71,0,5.43,5.43,0,1,1,0-8,.51.51,0,0,0,.71,0l3.85-3.85a.53.53,0,0,0,0-.72h0A11.89,11.89,0,0,0,1.91,9.28a.52.52,0,0,0,.37.63H5.09a.54.54,0,0,0,.5-.34V9.45A8.19,8.19,0,0,1,15.93,4.21a8,8,0,0,1,2.78,1.56L17.5,7A6.44,6.44,0,0,0,7.06,11.52h-5a.51.51,0,0,0-.36.64.54.54,0,0,0,.36.36h5A6.44,6.44,0,0,0,17.5,17.13l1.21,1.21a8.19,8.19,0,0,1-11.55-.91,8.34,8.34,0,0,1-1.57-2.82h0a.49.49,0,0,0-.49-.4H2.41a.5.5,0,0,0-.49.42h0a.15.15,0,0,0,0,.13v.06a11.91,11.91,0,0,0,19.81,5.79.51.51,0,0,0,0-.72h0ZM13.42,2.8A9.21,9.21,0,0,0,4.75,8.89H3.09A10.84,10.84,0,0,1,16.6,1.64a11,11,0,0,1,4,2.21L19.4,5.05A9.19,9.19,0,0,0,13.42,2.8Zm.07,20.1a10.83,10.83,0,0,1-10.4-7.71H4.76a9.21,9.21,0,0,0,11.8,5.52A9.5,9.5,0,0,0,19.44,19l1.15,1.2A10.84,10.84,0,0,1,13.49,22.9Z"
            transform="translate(-1.68 -0.12)"
          />
        </g>
      </g>
    </svg>
  </SvgIcon>
);

Cluedin.propTypes = {
  color: PropTypes.string,
};

Cluedin.defaultProps = {
  color: '#6d6d71',
};

export default Cluedin;
