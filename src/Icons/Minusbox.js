import React from 'react';
import PropTypes from 'prop-types';
import SvgIcon from '../SvgIcon';
/* eslint-disable max-len */

const Minusbox = props => (
  <SvgIcon {...props}>
    <svg
      focusable="false"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      width="24px"
      height="24px"
    >
      <g id="Group_558" data-name="Group 558" transform="translate(-316 -361)">
        <g
          id="Rectangle_1_copy_4"
          data-name="Rectangle 1 copy 4"
          transform="translate(316 361)"
          fill="transparent"
          stroke="currentColor"
          strokeWidth="1"
          opacity="0.6"
        >
          <rect width="20" height="20" stroke="none" />

          <rect x="0.5" y="0.5" width="19" height="19" />
        </g>

        <rect
          id="Rectangle_86"
          data-name="Rectangle 86"
          width="11.88"
          height="2.253"
          transform="translate(320 370)"
        />
      </g>
    </svg>
  </SvgIcon>
);

Minusbox.propTypes = {
  color: PropTypes.string,
};

Minusbox.defaultProps = {
  color: 'currentColor',
};

export default Minusbox;
