import React from 'react';
import PropTypes from 'prop-types';
import SvgIcon from '../SvgIcon';
/* eslint-disable max-len */

const Datacleaning = props => (
  <SvgIcon {...props}>
    <svg
      focusable="false"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 17.01 16.86"
      width="24px"
      height="24px"
    >
      <g id="Layer_2" data-name="Layer 2">
        <g id="Layer_1-2" data-name="Layer 1">
          <path d="M16.28,12.63,13.07,9.42A3,3,0,0,0,13,5.33L11.36,3.75,7.81.19a.66.66,0,0,0-.92,0L.19,6.89a.66.66,0,0,0,0,.92l3.56,3.55L5.33,13a3,3,0,0,0,4.24,0h0l3.2,3.19A2.49,2.49,0,0,0,17,14.38,2.44,2.44,0,0,0,16.28,12.63ZM2.89,6,4.75,7.88l.71-.71L3.6,5.32,5.32,3.6,7.17,5.46l.71-.71L6,2.89,7.35,1.57,10,4.21,4.21,10,1.57,7.35Zm3.36,6L5.13,10.9,10.9,5.13,12,6.25a1.7,1.7,0,0,1,0,2.4L11.71,9h0l-2.6,2.6h0L8.65,12A1.7,1.7,0,0,1,6.25,12Zm9.11,3.19h0a1.18,1.18,0,0,1-1.67,0L10.49,12l1.68-1.68,3.19,3.2a1.17,1.17,0,0,1,0,1.67Z" />
        </g>
      </g>
    </svg>
  </SvgIcon>
);

Datacleaning.propTypes = {
  color: PropTypes.string,
};

Datacleaning.defaultProps = {
  color: 'currentColor',
};

export default Datacleaning;
