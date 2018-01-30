import React from 'react';
import PropTypes from 'prop-types';
import SvgIcon from '../SvgIcon';
/* eslint-disable max-len */

const Issue = props => (
  <SvgIcon {...props}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 13.91"
      width="24px"
      height="24px"
    >
      <g id="Layer_2" data-name="Layer 2">
        <g id="Layer_1-2" data-name="Layer 1">
          <rect x="7.4" y="5.22" width="1.2" height="3.7" />
          <rect x="7.4" y="9.87" width="1.2" height="1.18" />
          <path d="M8.59.34a.69.69,0,0,0-1.18,0L.09,12.88a.69.69,0,0,0,.59,1H15.31a.69.69,0,0,0,.59-1ZM1.74,12.62,8,1.89,8.09,2l6.17,10.58Z" />
        </g>
      </g>
    </svg>
  </SvgIcon>
);

Issue.propTypes = {
  color: PropTypes.string,
};

Issue.defaultProps = {
  color: '#6d6d71',
};

export default Issue;
