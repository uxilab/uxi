import React from 'react';
import PropTypes from 'prop-types';
import SvgIcon from '../SvgIcon';
/* eslint-disable max-len */

const Copylink = props => (
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
          <path d="M13.17,8.77l1.69-1.69a3.89,3.89,0,0,0,0-5.49l-.46-.46a3.89,3.89,0,0,0-5.49,0L6.13,3.92a3.89,3.89,0,0,0,0,5.49l.23.23A.88.88,0,1,0,7.61,8.39l-.23-.23a2.12,2.12,0,0,1,0-3l2.79-2.79a2.12,2.12,0,0,1,3,0l.46.46a2.12,2.12,0,0,1,0,3L11.92,7.53a.88.88,0,0,0,0,1.25A.9.9,0,0,0,13.17,8.77Z" />
          <path d="M2.94,7.11l-1.8,1.8a3.88,3.88,0,0,0,0,5.49l.46.46h0a3.88,3.88,0,0,0,5.49,0l2.79-2.79a3.89,3.89,0,0,0,0-5.49l-.23-.23a.9.9,0,0,0-1.25,0,.88.88,0,0,0,0,1.25l.23.23a2.12,2.12,0,0,1,0,3L5.83,13.62a2.12,2.12,0,0,1-3,0l-.46-.46a2.12,2.12,0,0,1,0-3l1.8-1.8a.88.88,0,0,0,0-1.25A.9.9,0,0,0,2.94,7.11Z" />
        </g>
      </g>
    </svg>
  </SvgIcon>
);

Copylink.propTypes = {
  color: PropTypes.string,
};

Copylink.defaultProps = {
  color: '#6d6d71',
};

export default Copylink;
