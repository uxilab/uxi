import React from 'react';
import PropTypes from 'prop-types';
import SvgIcon from '../SvgIcon';
/* eslint-disable max-len */

const Integration = props => (
  <SvgIcon {...props}>
    <svg
      focusable="false"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      width="24px"
      height="24px"
    >
      <g id="Layer_2" data-name="Layer 2">
        <g id="Layer_1-2" data-name="Layer 1">
          <path d="M12.94,6.82a3,3,0,0,0-.59.06l-.1,0V5.24a1.49,1.49,0,0,0-1.49-1.49H9.1l0-.1a3,3,0,0,0,.06-.59,3.06,3.06,0,0,0-6.12,0,3,3,0,0,0,.06.59l0,.1H1.49A1.49,1.49,0,0,0,0,5.24V7.78a.6.6,0,0,0,.91.51,1.84,1.84,0,0,1,1-.28,1.87,1.87,0,0,1,0,3.74,1.84,1.84,0,0,1-1-.28A.6.6,0,0,0,0,12v2.54A1.49,1.49,0,0,0,1.49,16h9.27a1.49,1.49,0,0,0,1.49-1.49V12.86l.1,0a3,3,0,0,0,.59.06,3.06,3.06,0,1,0,0-6.12Zm0,4.93a1.84,1.84,0,0,1-1-.28.6.6,0,0,0-.91.51v2.54a.3.3,0,0,1-.3.3H1.49a.3.3,0,0,1-.3-.3V12.86l.1,0a3,3,0,0,0,.59.06,3.06,3.06,0,1,0,0-6.12,3,3,0,0,0-.59.06l-.1,0V5.24a.3.3,0,0,1,.3-.3H4A.6.6,0,0,0,4.54,4a1.83,1.83,0,0,1-.28-1A1.87,1.87,0,0,1,8,3.06a1.84,1.84,0,0,1-.28,1,.6.6,0,0,0,.51.91h2.54a.3.3,0,0,1,.3.3V7.78a.6.6,0,0,0,.91.51,1.84,1.84,0,0,1,1-.28,1.87,1.87,0,1,1,0,3.74Z" />
        </g>
      </g>
    </svg>
  </SvgIcon>
);

Integration.propTypes = {
  color: PropTypes.string,
};

Integration.defaultProps = {
  color: 'currentColor',
};

export default Integration;
