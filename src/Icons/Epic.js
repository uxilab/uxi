import React from 'react';
import PropTypes from 'prop-types';
import SvgIcon from '../SvgIcon';
/* eslint-disable max-len */

const Epic = props => (
  <SvgIcon {...props}>
    <svg focusable="false"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 12.72 16"
      width="24px"
      height="24px"
    >
      <g id="Layer_2" data-name="Layer 2">
        <g id="Layer_1-2" data-name="Layer 1">
          <path d="M12.72,9.65V.7A.7.7,0,0,0,12,0H.7A.7.7,0,0,0,0,.7V9.65a3.93,3.93,0,0,0,1.67,3.21l4.29,3a.71.71,0,0,0,.8,0l4.29-3A3.93,3.93,0,0,0,12.72,9.65Zm-2.47,2.07L6.36,14.45,2.47,11.71A2.53,2.53,0,0,1,1.39,9.65V1.39h9.93V9.65A2.53,2.53,0,0,1,10.25,11.71Z" />
        </g>
      </g>
    </svg>
  </SvgIcon>
);

Epic.propTypes = {
  color: PropTypes.string,
};

Epic.defaultProps = {
  color: '#6d6d71',
};

export default Epic;
