import React from 'react';
import PropTypes from 'prop-types';
import SvgIcon from '../SvgIcon';
/* eslint-disable max-len */

const Upload = props => (
  <SvgIcon {...props}>
    <svg
      focusable="false"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 15.75 15.78"
      width="24px"
      height="24px"
    >
      <g id="Layer_2" data-name="Layer 2">
        <g id="Layer_1-2" data-name="Layer 1">
          <polygon points="11.46 3.59 7.88 0 4.29 3.59 5.24 4.54 7.2 2.58 7.2 9.63 8.55 9.63 8.55 2.58 10.51 4.54 11.46 3.59" />
          <path d="M15.75,15.78V9.63h-5l-1.6,1.6H6.55L5,9.63H0v6.15ZM1.35,11h3L6,12.58H9.75l1.6-1.6h3v3.45H1.35Z" />
        </g>
      </g>
    </svg>
  </SvgIcon>
);

Upload.propTypes = {
  color: PropTypes.string
};

Upload.defaultProps = {
  color: '#6d6d71'
};

export default Upload;
