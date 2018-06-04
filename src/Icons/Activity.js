import React from 'react';
import PropTypes from 'prop-types';
import SvgIcon from '../SvgIcon';
/* eslint-disable max-len */

const Activity = props => (
  <SvgIcon {...props}>
    <svg focusable="false"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 15.76 16.33"
      width="24px"
      height="24px"
    >
      <g id="Layer_2" data-name="Layer 2">
        <g id="Layer_1-2" data-name="Layer 1">
          <path d="M9,16.33H9a.61.61,0,0,1-.57-.47L5.5,2.93,3.37,9.87a.6.6,0,0,1-.58.42H0V9.09H2.35L5,.42A.58.58,0,0,1,5.61,0a.6.6,0,0,1,.56.47L9.05,13.15,10,9.47A.59.59,0,0,1,10.56,9h5.2v1.2H11L9.6,15.87A.6.6,0,0,1,9,16.33Z" />
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
