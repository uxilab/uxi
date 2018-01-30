import React from 'react';
import PropTypes from 'prop-types';
import SvgIcon from '../SvgIcon';
/* eslint-disable max-len */

const Arrowleft = props => (
  <SvgIcon {...props}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 9.3 16"
      width="24px"
      height="24px"
    >
      <g id="Layer_2" data-name="Layer 2">
        <g id="Layer_1-2" data-name="Layer 1">
          <polyline points="0 8 8 16 9.3 14.7 2.6 8 9.3 1.3 8 0" />
        </g>
      </g>
    </svg>
  </SvgIcon>
);

Arrowleft.propTypes = {
  color: PropTypes.string,
};

Arrowleft.defaultProps = {
  color: '#6d6d71',
};

export default Arrowleft;
