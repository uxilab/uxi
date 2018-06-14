import React from 'react';
import PropTypes from 'prop-types';
import SvgIcon from '../SvgIcon';
/* eslint-disable max-len */

const Creditcard = props => (
  <SvgIcon {...props}>
    <svg
      focusable="false"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 18.07 12.49"
      width="24px"
      height="24px"
    >
      <g id="Layer_2" data-name="Layer 2">
        <g id="Layer_1-2" data-name="Layer 1">
          <path d="M14.29,7.61a1.16,1.16,0,0,0-.84.36,1.14,1.14,0,0,0-.83-.36,1.16,1.16,0,1,0,0,2.31,1.14,1.14,0,0,0,.83-.36,1.15,1.15,0,0,0,2-.8A1.15,1.15,0,0,0,14.29,7.61Z" />
          <path d="M16.47,0H1.6A1.6,1.6,0,0,0,0,1.6v9.29a1.6,1.6,0,0,0,1.6,1.6H16.47a1.6,1.6,0,0,0,1.6-1.6V1.6A1.6,1.6,0,0,0,16.47,0ZM16,11.15H2.06a.72.72,0,0,1-.72-.72V5.86H16.73v4.57A.73.73,0,0,1,16,11.15Zm.73-8H1.34V1.73a.4.4,0,0,1,.4-.4H16.33a.4.4,0,0,1,.4.41Z" />
        </g>
      </g>
    </svg>
  </SvgIcon>
);

Creditcard.propTypes = {
  color: PropTypes.string
};

Creditcard.defaultProps = {
  color: '#6d6d71'
};

export default Creditcard;
