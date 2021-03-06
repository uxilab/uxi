import React from 'react';
import PropTypes from 'prop-types';
import SvgIcon from '../SvgIcon';
/* eslint-disable max-len */

const Governance = props => (
  <SvgIcon {...props}>
    <svg
      focusable="false"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 12.72 16"
      width="24px"
      height="24px"
    >
      <g id="Layer_2" data-name="Layer 2">
        <g id="Layer_1-2" data-name="Layer 1">
          <path d="M12.72,9.65V.7A.7.7,0,0,0,12,0H.7A.7.7,0,0,0,0,.7v9a3.93,3.93,0,0,0,1.67,3.21l4.29,3a.73.73,0,0,0,.8,0l4.29-3A3.93,3.93,0,0,0,12.72,9.65Zm-2.47,2.06L6.36,14.45,2.47,11.71A2.53,2.53,0,0,1,1.39,9.65V1.39h9.94V9.65A2.53,2.53,0,0,1,10.25,11.71Z" />
          <path d="M6.36,3.77c-1.48,0-3,.45-3,1.3v4c0,.85,1.5,1.3,3,1.3s3-.45,3-1.3v-4C9.34,4.22,7.84,3.77,6.36,3.77ZM8.77,9.1c0,.26-.92.73-2.41.73S4,9.36,4,9.1V8.55l.08,0a5.33,5.33,0,0,0,2.33.46,5.33,5.33,0,0,0,2.33-.46l.08,0Zm0-1.34c0,.25-.92.72-2.41.72S4,8,4,7.76V7.2l.08,0a5.32,5.32,0,0,0,2.33.47,5.32,5.32,0,0,0,2.33-.47l.08,0Zm0-1.35c0,.26-.92.73-2.41.73S4,6.67,4,6.41V5.85l.08,0a5.18,5.18,0,0,0,2.33.47,5.18,5.18,0,0,0,2.33-.47l.08,0ZM6.36,5.79C4.87,5.79,4,5.32,4,5.07s.92-.73,2.41-.73,2.41.47,2.41.73S7.85,5.79,6.36,5.79Z" />
        </g>
      </g>
    </svg>
  </SvgIcon>
);

Governance.propTypes = {
  color: PropTypes.string,
};

Governance.defaultProps = {
  color: 'currentColor',
};

export default Governance;
