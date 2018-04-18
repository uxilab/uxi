import React from 'react';
import PropTypes from 'prop-types';
import SvgIcon from '../SvgIcon';
/* eslint-disable max-len */

const Circledcheckmark = props => (
  <SvgIcon {...props}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 79 79"
      width="24px"
      height="24px"
    >
      <g id="Layer_2" data-name="Layer 2">
        <g id="Layer_1-2" data-name="Layer 1">
          <circle cx="39.5" cy="39.5" r="39.5" style="fill:#26a29a" />
          <path
            d="M34,55.07h0a4,4,0,0,1-2.82-1.18L19,41.69A4,4,0,1,1,24.66,36L34,45.41l20.31-20.3A4,4,0,1,1,60,30.76L36.86,53.89A4,4,0,0,1,34,55.07Z"
            style="fill:#f3f3f2"
          />
        </g>
      </g>
    </svg>
  </SvgIcon>
);

Circledcheckmark.propTypes = {
  color: PropTypes.string,
};

Circledcheckmark.defaultProps = {
  color: '#6d6d71',
};

export default Circledcheckmark;
