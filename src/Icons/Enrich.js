import React from 'react';
import PropTypes from 'prop-types';
import SvgIcon from '../SvgIcon';
/* eslint-disable max-len */

const Enrich = props => (
  <SvgIcon {...props}>
    <svg
      focusable="false"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 14.28 17.86"
      width="24px"
      height="24px"
    >
      <g id="Layer_2" data-name="Layer 2">
        <g id="Layer_1-2" data-name="Layer 1">
          <path d="M4.91,17.86a.65.65,0,0,1-.65-.65V14.59a1.46,1.46,0,0,1,1.46-1.46H8.78a.92.92,0,0,0,0-1.83H2.21A2.21,2.21,0,0,1,0,9.09V8.9A2.21,2.21,0,0,1,2.21,6.69h9.85A.92.92,0,0,0,13,5.78V5.53a.92.92,0,0,0-.92-.92H5.78A1.46,1.46,0,0,1,4.32,3.15V.65a.65.65,0,0,1,1.3,0v2.5a.16.16,0,0,0,.16.16h6.28a2.23,2.23,0,0,1,2.22,2.22v.25A2.22,2.22,0,0,1,12.06,8H2.21a.91.91,0,0,0-.91.91v.19a.91.91,0,0,0,.91.91H8.78a2.22,2.22,0,1,1,0,4.43H5.72a.16.16,0,0,0-.16.16v2.62A.65.65,0,0,1,4.91,17.86Z" />
        </g>
      </g>
    </svg>
  </SvgIcon>
);

Enrich.propTypes = {
  color: PropTypes.string,
};

Enrich.defaultProps = {
  color: 'currentColor',
};

export default Enrich;
