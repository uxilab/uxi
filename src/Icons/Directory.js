import React from 'react';
import PropTypes from 'prop-types';
import SvgIcon from '../SvgIcon';
/* eslint-disable max-len */

const Directory = props => (
  <SvgIcon {...props}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 13.57"
      width="24px"
      height="24px"
    >
      <g id="Layer_2" data-name="Layer 2">
        <g id="Layer_1-2" data-name="Layer 1">
          <path d="M14.48,2.43H7.75L6.38.61A1.52,1.52,0,0,0,5.16,0H1.52A1.52,1.52,0,0,0,0,1.52V12.05a1.52,1.52,0,0,0,1.52,1.52h13A1.52,1.52,0,0,0,16,12.05V3.95A1.52,1.52,0,0,0,14.48,2.43ZM1.42,12.15V1.42h3.8L6.58,3.24a1.53,1.53,0,0,0,1.22.61h6.78v8.3Z" />
        </g>
      </g>
    </svg>
  </SvgIcon>
);

Directory.propTypes = {
  color: PropTypes.string
};

Directory.defaultProps = {
  color: '#6d6d71'
};

export default Directory;
