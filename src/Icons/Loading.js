import React from 'react';
import PropTypes from 'prop-types';
import SvgIcon from '../SvgIcon';
/* eslint-disable max-len */

const Loading = props => (
  <SvgIcon {...props}>
    <svg
      focusable="false"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      width="24px"
      height="24px"
    >
      <g id="Layer_2" data-name="Layer 2">
        <g id="Layer_1-2" data-name="Layer 1">
          <path d="M1.38,10.88a.84.84,0,0,0,.42,1.56.91.91,0,0,0,.42-.11.82.82,0,0,0,.29-1.12A.82.82,0,0,0,1.38,10.88Z" />
          <path d="M4.4,2.61a.91.91,0,0,0,.42-.11.83.83,0,0,0,.29-1.14A.81.81,0,0,0,4,1.06a.8.8,0,0,0-.29,1.12A.77.77,0,0,0,4.4,2.61Z" />
          <path d="M4.83,13.5a.81.81,0,0,0-1.12.29A.82.82,0,0,0,4.4,15a.82.82,0,0,0,.42-1.52Z" />
          <path d="M1.38,5.14a.84.84,0,0,0,.4.11.8.8,0,0,0,.72-.42A.81.81,0,0,0,2.2,3.71.83.83,0,0,0,1.08,4,.82.82,0,0,0,1.38,5.14Z" />
          <path d="M.83,8.83A.83.83,0,1,0,0,8,.82.82,0,0,0,.83,8.83Z" />
          <path d="M8,0A.83.83,0,1,0,8,1.65a6.35,6.35,0,0,1,0,12.7A.83.83,0,0,0,8,16,8,8,0,0,0,8,0Z" />
        </g>
      </g>
    </svg>
  </SvgIcon>
);

Loading.propTypes = {
  color: PropTypes.string,
};

Loading.defaultProps = {
  color: 'currentColor',
};

export default Loading;
