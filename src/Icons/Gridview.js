import React from 'react';
import PropTypes from 'prop-types';
import SvgIcon from '../SvgIcon';
/* eslint-disable max-len */

const Gridview = props => (
  <SvgIcon {...props}>
    <svg
      focusable="false"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 17.2 16.96"
      width="24px"
      height="24px"
    >
      <g id="Layer_2" data-name="Layer 2">
        <g id="Layer_1-2" data-name="Layer 1">
          <path d="M7.4,8H.6A.6.6,0,0,1,0,7.4V.6A.6.6,0,0,1,.6,0H7.4A.6.6,0,0,1,8,.6V7.4A.6.6,0,0,1,7.4,8ZM1.2,6.8H6.8V1.2H1.2Z" />
          <path d="M16.6,8H9.8a.6.6,0,0,1-.6-.6V.6A.6.6,0,0,1,9.8,0h6.8a.6.6,0,0,1,.6.6V7.4A.6.6,0,0,1,16.6,8ZM10.4,6.8H16V1.2H10.4Z" />
          <path d="M7.4,17H.6a.6.6,0,0,1-.6-.6V9.55A.6.6,0,0,1,.6,9H7.4a.6.6,0,0,1,.6.6v6.81A.6.6,0,0,1,7.4,17Zm-6.2-1.2H6.8V10.15H1.2Z" />
          <path d="M16.6,17H9.8a.6.6,0,0,1-.6-.6V9.55A.6.6,0,0,1,9.8,9h6.8a.6.6,0,0,1,.6.6v6.81A.6.6,0,0,1,16.6,17Zm-6.2-1.2H16V10.15H10.4Z" />
        </g>
      </g>
    </svg>
  </SvgIcon>
);

Gridview.propTypes = {
  color: PropTypes.string,
};

Gridview.defaultProps = {
  color: 'currentColor',
};

export default Gridview;
