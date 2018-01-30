import React from 'react';
import PropTypes from 'prop-types';
import SvgIcon from '../SvgIcon';
/* eslint-disable max-len */

const Activity = props => (
  <SvgIcon {...props}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 11.97"
      width="24px"
      height="24px"
    >
      <g id="Layer_2" data-name="Layer 2">
        <g id="Layer_1-2" data-name="Layer 1">
          <path d="M3.29,6.19H0V7.77H3.8a.8.8,0,0,0,.72-.47L6.39,3.15l2.23,8.24a.79.79,0,0,0,.66.58.8.8,0,0,0,.79-.37l2.52-4.17H16V5.84H12.14a.8.8,0,0,0-.68.38l-1.79,3L7.35.59A.79.79,0,0,0,6.64,0a.78.78,0,0,0-.79.47Z" />
        </g>
      </g>
    </svg>
  </SvgIcon>
);

Activity.propTypes = {
  color: PropTypes.string,
};

Activity.defaultProps = {
  color: '#6d6d71',
};

export default Activity;
