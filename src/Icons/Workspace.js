import React from 'react';
import PropTypes from 'prop-types';
import SvgIcon from '../SvgIcon';
/* eslint-disable max-len */

const Workspace = props => (
  <SvgIcon {...props}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 12.67"
      width="24px"
      height="24px"
    >
      <g id="Layer_2" data-name="Layer 2">
        <g id="Layer_1-2" data-name="Layer 1">
          <path d="M15.93,11,14.71,7.33V.75A.75.75,0,0,0,14,0H2a.75.75,0,0,0-.75.75V7.33L.07,11a1.28,1.28,0,0,0,.15,1.17,1.28,1.28,0,0,0,1.06.52H14.71A1.25,1.25,0,0,0,15.93,11ZM13.22,1.49V6.71H2.78V1.49ZM1.58,11.18l1-3H13.43l1,3Z" />
          <rect x="6.51" y="8.94" width="2.98" height="1.49" />
        </g>
      </g>
    </svg>
  </SvgIcon>
);

Workspace.propTypes = {
  color: PropTypes.string
};

Workspace.defaultProps = {
  color: '#6d6d71'
};

export default Workspace;
