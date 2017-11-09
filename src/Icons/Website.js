import React from 'react';
import PropTypes from 'prop-types';
import SvgIcon from '../SvgIcon';
/* eslint-disable max-len */

const Website = props => (
  <SvgIcon {...props}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 17 15.43"
      width="24px"
      height="24px"
    >
      <g id="Layer_2" data-name="Layer 2">
        <g id="Layer_1-2" data-name="Layer 1">
          <path d="M0,14a1.45,1.45,0,0,0,1.45,1.44H15.55A1.45,1.45,0,0,0,17,14V1.44A1.45,1.45,0,0,0,15.55,0H1.45A1.45,1.45,0,0,0,0,1.44ZM9.16,1.32h6.52V3.14H9.16Zm-3.92,0h2.6V3.14H5.24Zm-3.92,0h2.6V3.14H1.32Zm0,3.14H15.68v9.65H1.32Z" />
        </g>
      </g>
    </svg>
  </SvgIcon>
);

Website.propTypes = {
  color: PropTypes.string,
};

Website.defaultProps = {
  color: '#6d6d71',
};

export default Website;
