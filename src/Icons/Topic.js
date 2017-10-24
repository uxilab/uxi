import React, { PropTypes } from 'react';
import SvgIcon from '../SvgIcon';
/* eslint-disable max-len */

const Topic = props => (
  <SvgIcon {...props}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16.49 16"
      width="24px"
      height="24px"
    >
      <g id="Layer_2" data-name="Layer 2">
        <g id="Layer_1-2" data-name="Layer 1">
          <path d="M3.55,16a.37.37,0,0,0,.39,0l3.7-2.78h7.29a1.56,1.56,0,0,0,1.55-1.55v-10A1.56,1.56,0,0,0,14.94,0H1.55A1.56,1.56,0,0,0,0,1.55v10a1.56,1.56,0,0,0,1.55,1.55H3.35v2.48A.37.37,0,0,0,3.55,16ZM1.43,11.71V1.43H15.06V11.71H7.17L4.78,13.51V11.71Z" />
          <circle cx="6" cy="6.7" r="1.3" />
          <circle cx="10.66" cy="6.7" r="1.3" />
        </g>
      </g>
    </svg>
  </SvgIcon>
);

Topic.propTypes = {
  color: PropTypes.string
};

Topic.defaultProps = {
  color: '#6d6d71'
};

export default Topic;
