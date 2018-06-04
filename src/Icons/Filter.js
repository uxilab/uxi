import React from 'react';
import PropTypes from 'prop-types';
import SvgIcon from '../SvgIcon';
/* eslint-disable max-len */

const Filter = props => (
  <SvgIcon {...props}>
    <svg focusable="false"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 15.25 17.5"
      width="24px"
      height="24px"
    >
      <g id="Layer_2" data-name="Layer 2">
        <g id="Layer_1-2" data-name="Layer 1">
          <path d="M15,1.09A2,2,0,0,0,13.26,0H2A2,2,0,0,0,.36,3.13L4.75,9.37v6a.74.74,0,0,0,.51.71l4,1.37a.67.67,0,0,0,.24,0,.77.77,0,0,0,.44-.14.74.74,0,0,0,.31-.61V9.42l4.59-6.26A2,2,0,0,0,15,1.09ZM6.25,14.84v-5H8.77V15.7ZM13.66,2.27,9.17,8.38H5.89L1.59,2.26a.46.46,0,0,1,0-.5A.46.46,0,0,1,2,1.5H13.26a.49.49,0,0,1,.4.77Z" />
        </g>
      </g>
    </svg>
  </SvgIcon>
);

Filter.propTypes = {
  color: PropTypes.string,
};

Filter.defaultProps = {
  color: '#6d6d71',
};

export default Filter;
