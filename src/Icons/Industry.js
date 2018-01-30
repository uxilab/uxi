import React from 'react';
import PropTypes from 'prop-types';
import SvgIcon from '../SvgIcon';
/* eslint-disable max-len */

const Industry = props => (
  <SvgIcon {...props}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 18.57 15.75"
      width="24px"
      height="24px"
    >
      <g id="Layer_2" data-name="Layer 2">
        <g id="Layer_1-2" data-name="Layer 1">
          <path d="M0,.82V14.93a.82.82,0,0,0,.82.82H17.76a.82.82,0,0,0,.82-.82V7.4a.82.82,0,0,0-.82-.82H4.46V3.64a.82.82,0,0,0-.24-.58L1.39.24A.81.81,0,0,0,.82,0,.83.83,0,0,0,.5.06.81.81,0,0,0,0,.82Zm1.63,2L2.82,4V7.4a.82.82,0,0,0,.82.82h13.3v5.9H1.63Z" />
          <rect x="3.76" y="10.35" width="2.57" height="1.63" />
          <rect x="8.47" y="10.35" width="2.57" height="1.63" />
          <rect x="13.18" y="10.35" width="2.57" height="1.63" />
        </g>
      </g>
    </svg>
  </SvgIcon>
);

Industry.propTypes = {
  color: PropTypes.string,
};

Industry.defaultProps = {
  color: '#6d6d71',
};

export default Industry;
