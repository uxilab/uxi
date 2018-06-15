import React from 'react';
import PropTypes from 'prop-types';
import SvgIcon from '../SvgIcon';
/* eslint-disable max-len */

const Networkadress = props => (
  <SvgIcon {...props}>
    <svg
      focusable="false"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 17.37 15"
      width="24px"
      height="24px"
    >
      <g id="Layer_2" data-name="Layer 2">
        <g id="Layer_1-2" data-name="Layer 1">
          <path d="M16.69,0H.68A.67.67,0,0,0,0,.68V11.83a.67.67,0,0,0,.68.67H4v1.82a.67.67,0,0,0,.68.68h8.09a.67.67,0,0,0,.68-.68V12.5h3.28a.68.68,0,0,0,.68-.67V.68A.68.68,0,0,0,16.69,0ZM16,11.15H12.73a.67.67,0,0,0-.67.68v1.82H5.31V11.83a.67.67,0,0,0-.67-.68H1.35V1.35H4v5H5.39v-5H6.68v5H8v-5H9.33v5h1.35v-5H12v5h1.35v-5H16Z" />
        </g>
      </g>
    </svg>
  </SvgIcon>
);

Networkadress.propTypes = {
  color: PropTypes.string,
};

Networkadress.defaultProps = {
  color: '#6d6d71',
};

export default Networkadress;
