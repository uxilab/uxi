import React from 'react';
import PropTypes from 'prop-types';
import SvgIcon from '../SvgIcon';
/* eslint-disable max-len */

const Picture = props => (
  <SvgIcon {...props}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      width="24px"
      height="24px"
    >
      <g id="Layer_2" data-name="Layer 2">
        <g id="Layer_1-2" data-name="Layer 1">
          <path d="M5.51,8.34,4.76,9.55a.41.41,0,0,0,.35.63h5.78a.41.41,0,0,0,.35-.63l-2-3.15a.41.41,0,0,0-.7,0L7.14,8.69a.41.41,0,0,1-.7,0l-.22-.36A.41.41,0,0,0,5.51,8.34Z" />
          <path d="M3.64,11.64V5.09H2.18v6.55a1.46,1.46,0,0,0,1.45,1.45H16V11.64Z" />
          <path d="M12.36,10.91h1.45V4.36a1.46,1.46,0,0,0-1.45-1.45H0V4.36H12.36Z" />
          <rect x="2.18" width="1.45" height="2.18" />
          <rect x="12.36" y="13.82" width="1.45" height="2.18" />
        </g>
      </g>
    </svg>
  </SvgIcon>
);

Picture.propTypes = {
  color: PropTypes.string,
};

Picture.defaultProps = {
  color: '#6d6d71',
};

export default Picture;
