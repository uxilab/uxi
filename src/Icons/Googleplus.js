import React from 'react';
import PropTypes from 'prop-types';
import SvgIcon from '../SvgIcon';
/* eslint-disable max-len */

const Googleplus = props => (
  <SvgIcon {...props}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      width="24px"
      height="24px"
    >
      <g id="Layer_2" data-name="Layer 2">
        <g id="Layer_1-2" data-name="Layer 1">
          <path d="M6.8,9.53,6.62,9.4A2.1,2.1,0,0,0,6,9.31H6c-.94,0-1.76.57-1.76,1.21a1.44,1.44,0,0,0,1.6,1.25c1.18,0,1.78-.41,1.78-1.21a1,1,0,0,0,0-.23C7.52,10,7.23,9.83,6.8,9.53Z" />
          <path d="M6.14,7.08h0a.72.72,0,0,0,.56-.26A1.47,1.47,0,0,0,7,5.68,1.62,1.62,0,0,0,5.67,4.17h0a.72.72,0,0,0-.55.26,1.42,1.42,0,0,0-.26,1.12c.11.81.7,1.51,1.29,1.53Z" />
          <path d="M8,0a8,8,0,1,0,8,8A8,8,0,0,0,8,0ZM7,12.5a4,4,0,0,1-1.12.15,5.15,5.15,0,0,1-1.26-.15,2.45,2.45,0,0,1-1.6-1,1.32,1.32,0,0,1-.17-.65,1.64,1.64,0,0,1,.16-.7A3,3,0,0,1,5.74,8.63h0a1.08,1.08,0,0,1-.15-.55,1.17,1.17,0,0,1,0-.29A2.21,2.21,0,0,1,3.42,5.58a2.36,2.36,0,0,1,1.7-2.07A2.79,2.79,0,0,1,6,3.35H8.77a.22.22,0,0,1,.13.39l-.61.45a.22.22,0,0,1-.13,0H7.94A2.14,2.14,0,0,1,8.39,5.6a2,2,0,0,1-.86,1.6c-.43.33-.44.42-.44.62a1.83,1.83,0,0,0,.63.68,2.13,2.13,0,0,1,1.05,2A2.24,2.24,0,0,1,7,12.5Zm6.2-4.71A.22.22,0,0,1,13,8H11.4V9.56a.22.22,0,0,1-.22.22h-.44a.22.22,0,0,1-.22-.22V8H9a.22.22,0,0,1-.22-.22V7.34A.22.22,0,0,1,9,7.13h1.56V5.57a.22.22,0,0,1,.22-.22h.44a.22.22,0,0,1,.22.22V7.13H13a.22.22,0,0,1,.22.22Z" />
        </g>
      </g>
    </svg>
  </SvgIcon>
);

Googleplus.propTypes = {
  color: PropTypes.string
};

Googleplus.defaultProps = {
  color: '#6d6d71'
};

export default Googleplus;
