import React from 'react';
import PropTypes from 'prop-types';
import SvgIcon from '../SvgIcon';
/* eslint-disable max-len */

const Datasoverignty = props => (
  <SvgIcon {...props}>
    <svg
      focusable="false"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 13.2 16"
      width="24px"
      height="24px"
    >
      <g id="Layer_2" data-name="Layer 2">
        <g id="Layer_1-2" data-name="Layer 1">
          <path d="M13,5a.55.55,0,0,0,.16-.38V.56A.56.56,0,0,0,12.64,0H10.39a.56.56,0,0,0-.55.56v1H8.62v-1A.56.56,0,0,0,8.07,0H5.15a.56.56,0,0,0-.56.56v1H3.38v-1A.56.56,0,0,0,2.82,0H.58A.56.56,0,0,0,0,.56V4.63A.58.58,0,0,0,.17,5L1.61,6.53v5.94l-1.36.89a.56.56,0,0,0-.25.47v1.61A.56.56,0,0,0,.56,16H12.62a.56.56,0,0,0,.55-.56V13.83a.56.56,0,0,0-.25-.47l-1.35-.89V6.57ZM10.7,13.24l1.36.89v.75H1.12v-.75l1.35-.89a.56.56,0,0,0,.25-.47V6.48a.54.54,0,0,0-.13-.54L1.14,4.41V1.12H2.26v1a.56.56,0,0,0,.56.55H5.15a.56.56,0,0,0,.56-.55v-1h1.8v1a.56.56,0,0,0,.56.55h2.32A.56.56,0,0,0,11,2.11v-1h1.13v3.3L10.71,5.86a.55.55,0,0,0-.26.47v6.44A.59.59,0,0,0,10.7,13.24Z" />
          <path d="M6.6,5.31A2.23,2.23,0,0,0,4.37,7.53v2.6a.56.56,0,0,0,.56.56H8.26a.56.56,0,0,0,.56-.56V7.53A2.23,2.23,0,0,0,6.6,5.31ZM7.71,9.58H5.49v-2a1.11,1.11,0,1,1,2.22,0Z" />
        </g>
      </g>
    </svg>
  </SvgIcon>
);

Datasoverignty.propTypes = {
  color: PropTypes.string,
};

Datasoverignty.defaultProps = {
  color: 'currentColor',
};

export default Datasoverignty;
