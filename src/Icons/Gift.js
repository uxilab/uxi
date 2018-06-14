import React from 'react';
import PropTypes from 'prop-types';
import SvgIcon from '../SvgIcon';
/* eslint-disable max-len */

const Gift = props => (
  <SvgIcon {...props}>
    <svg
      focusable="false"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 15.52 15.5"
      width="24px"
      height="24px"
    >
      <g id="Layer_2" data-name="Layer 2">
        <g id="Layer_1-2" data-name="Layer 1">
          <path d="M15.52,6.14a1.35,1.35,0,0,0-1.35-1.35H10.65l.91-.47a3.7,3.7,0,0,0,.93-.66,2.16,2.16,0,0,0,0-3,2.21,2.21,0,0,0-3,0A6.74,6.74,0,0,0,8,4.5v.12H7.52V4.5A6.77,6.77,0,0,0,6.08.61a2.21,2.21,0,0,0-3,0,2.15,2.15,0,0,0,0,3A3.7,3.7,0,0,0,4,4.31l.91.47H1.35A1.35,1.35,0,0,0,0,6.14v2.4a.55.55,0,0,0,.55.55H.8v5.06A1.35,1.35,0,0,0,2.15,15.5H13.37a1.35,1.35,0,0,0,1.35-1.35V9.09H15a.55.55,0,0,0,.55-.55ZM4.81,14.4H1.9V9.09h2.9ZM4.81,8H1.1V5.89h3.7ZM9.26,3.54a4.6,4.6,0,0,1,.93-2.12h0l0,0a1.08,1.08,0,0,1,1.49,0,1,1,0,0,1,0,1.49,4.49,4.49,0,0,1-2.15,1l-.37.08ZM3.81,2.87a1,1,0,0,1,0-1.49,1.08,1.08,0,0,1,1.49,0,4.5,4.5,0,0,1,1,2.15l.08.37L6,3.83A4.48,4.48,0,0,1,3.81,2.87ZM9.61,14.4H5.91V9.09h3.7ZM9.61,8H5.91V5.89h3.7Zm4,6.41h-2.9V9.09h2.9ZM14.42,8h-3.7V5.89h3.7Z" />
        </g>
      </g>
    </svg>
  </SvgIcon>
);

Gift.propTypes = {
  color: PropTypes.string
};

Gift.defaultProps = {
  color: '#6d6d71'
};

export default Gift;
