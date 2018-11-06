import React from 'react';
import PropTypes from 'prop-types';
import SvgIcon from '../SvgIcon';
/* eslint-disable max-len */

const Access = props => (
  <SvgIcon {...props}>
    <svg
      focusable="false"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 15.48 16"
      width="24px"
      height="24px"
    >
      <g id="Layer_2" data-name="Layer 2">
        <g id="Layer_1-2" data-name="Layer 1">
          <path d="M14.21,7.41a4.35,4.35,0,0,0,0-6.14,4.34,4.34,0,0,0-6.79,5.3l0,.08-.06.06L0,14.12l1.36,1.36,1.19-1.19L4.26,16l1.36-1.36L3.91,12.93l.83-.83,1.71,1.71L7.8,12.45,6.09,10.74,8.83,8l.08,0A4.33,4.33,0,0,0,14.21,7.41ZM8.35,4.34a2.77,2.77,0,0,1,.82-2h0a2.79,2.79,0,1,1-.82,2Z" />
        </g>
      </g>
    </svg>
  </SvgIcon>
);

Access.propTypes = {
  color: PropTypes.string,
};

Access.defaultProps = {
  color: '#6d6d71',
};

export default Access;
