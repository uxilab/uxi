import React from 'react';
import PropTypes from 'prop-types';
import SvgIcon from '../SvgIcon';
/* eslint-disable max-len */

const History = props => (
  <SvgIcon {...props} >

    <svg focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17.36 17.4" width="24px" height="24px">
      <g id="Layer_2" data-name="Layer 2">
        <g id="Layer_1-2" data-name="Layer 1">
          <path d="M7,9a1.7,1.7,0,0,0,3.32.44L13,9.35a.58.58,0,0,0,.55-.59.57.57,0,0,0-.6-.54l-2.68.1a1.71,1.71,0,0,0-1.2-1l-.12-3.1a.57.57,0,1,0-1.14,0l.12,3.19A1.7,1.7,0,0,0,7,9Z" />
          <path d="M8.32,0A8.66,8.66,0,0,0,2.27,2.82L.53,1.09V5.4H4.84L3.26,3.81A7.29,7.29,0,1,1,1.4,9.4H0A8.69,8.69,0,1,0,8.32,0Z" />
        </g>
      </g>
    </svg>
  </SvgIcon>
);

History.propTypes = {
  color: PropTypes.string,
};

History.defaultProps = {
  color: '#6d6d71',
};

export default History;
