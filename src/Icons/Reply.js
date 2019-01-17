import React from 'react';
import PropTypes from 'prop-types';
import SvgIcon from '../SvgIcon';
/* eslint-disable max-len */

const Reply = props => (
  <SvgIcon {...props}>
    <svg
      focusable="false"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 15.55"
      width="24px"
      height="24px"
    >
      <g id="Layer_2" data-name="Layer 2">
        <g id="Layer_1-2" data-name="Layer 1">
          <path d="M9.5,3.14H2.21l2-2A.64.64,0,0,0,3.34.19L.19,3.34a.64.64,0,0,0,0,.91L3.31,7.37a.64.64,0,1,0,.91-.91l-2-2H9.5a5.22,5.22,0,0,1,5.21,5.21,4.63,4.63,0,0,1-4.63,4.63H3.79a.64.64,0,1,0,0,1.29h6.29A5.92,5.92,0,0,0,16,9.63,6.5,6.5,0,0,0,9.5,3.14Z" />
        </g>
      </g>
    </svg>
  </SvgIcon>
);

Reply.propTypes = {
  color: PropTypes.string,
};

Reply.defaultProps = {
  color: 'currentColor',
};

export default Reply;
