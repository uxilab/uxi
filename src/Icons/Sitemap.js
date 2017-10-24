import React from 'react';
import PropTypes from 'prop-types';
import SvgIcon from '../SvgIcon';
/* eslint-disable max-len */

const Sitemap = props => (
  <SvgIcon {...props}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 15.75 15.75"
      width="24px"
      height="24px"
    >
      <g id="Layer_2" data-name="Layer 2">
        <g id="Layer_1-2" data-name="Layer 1">
          <path d="M10.27,15.75h4.8a.68.68,0,0,0,.67-.67v-4a.68.68,0,0,0-.67-.67H13.35V9.47A2.28,2.28,0,0,0,11.08,7.2H8.55V5.35h1.72A.68.68,0,0,0,11,4.67v-4A.68.68,0,0,0,10.27,0H5.48A.68.68,0,0,0,4.8.67v4a.68.68,0,0,0,.67.67H7.2V7.2H4.68A2.28,2.28,0,0,0,2.4,9.47v.93H.68a.68.68,0,0,0-.68.67v4a.68.68,0,0,0,.68.67h4.8a.68.68,0,0,0,.67-.67v-4a.68.68,0,0,0-.67-.67H3.75V9.47a.93.93,0,0,1,.93-.92h6.4a.93.93,0,0,1,.92.92v.93H10.27a.68.68,0,0,0-.67.67v4A.68.68,0,0,0,10.27,15.75Zm-5.47-4V14.4H1.35V11.75ZM6.15,4V1.35H9.6V4ZM11,11.75H14.4V14.4H11Z" />
        </g>
      </g>
    </svg>
  </SvgIcon>
);

Sitemap.propTypes = {
  color: PropTypes.string
};

Sitemap.defaultProps = {
  color: '#6d6d71'
};

export default Sitemap;
