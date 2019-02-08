import React from 'react';
import PropTypes from 'prop-types';
import SvgIcon from '../SvgIcon';
/* eslint-disable max-len */

const Datalineage = props => (
  <SvgIcon {...props}>
    <svg
      focusable="false"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 15.68 17.17"
      width="24px"
      height="24px"
    >
      <g id="Layer_2" data-name="Layer 2">
        <g id="Layer_1-2" data-name="Layer 1">
          <path d="M13.27,11.31V8.51A.54.54,0,0,0,12.72,8H8.19V3.5H9.8V5.33a.55.55,0,0,0,.55.55h4.74a.55.55,0,0,0,.55-.55V.58A.54.54,0,0,0,15.09,0H10.35A.55.55,0,0,0,9.8.58V2.41h-4a3,3,0,1,0,0,1.09H7.09V8H3a.54.54,0,0,0-.55.54v2.78H.58a.55.55,0,0,0-.54.55v4.74a.54.54,0,0,0,.54.55H5.33a.55.55,0,0,0,.55-.55V11.84a.55.55,0,0,0-.55-.55H3.5V9.06h8.67v2.25a3,3,0,1,0,1.1,0ZM10.9,1.13h3.65V4.78H10.9ZM3,4.75A1.79,1.79,0,1,1,4.74,3,1.79,1.79,0,0,1,3,4.75ZM4.78,16H1.13V12.39H4.78Zm7.94,0a1.79,1.79,0,1,1,1.79-1.79A1.79,1.79,0,0,1,12.72,16Z" />
        </g>
      </g>
    </svg>
  </SvgIcon>
);

Datalineage.propTypes = {
  color: PropTypes.string,
};

Datalineage.defaultProps = {
  color: 'currentColor',
};

export default Datalineage;
