import React from 'react';
import PropTypes from 'prop-types';
import SvgIcon from '../SvgIcon';
/* eslint-disable max-len */

const Erase = props => (
  <SvgIcon {...props}>
    <svg
      focusable="false"
      id="Layer_1"
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="24px"
      height="24px"
    >
      <path d="M22.89,21H13.37l9.92-9.93a2,2,0,0,0,0-2.91L16.74,1.6a2.08,2.08,0,0,0-2.92,0L.71,14.72a2,2,0,0,0,0,2.91L4.07,21h-3a1,1,0,1,0,0,2H22.89a1,1,0,1,0,0-2ZM15.28,2.69l6.93,6.93-2,2L13.27,4.7ZM12,6l6.93,6.93L12,19.82,5.07,12.89ZM1.79,16.17l2-2L10.63,21h-4Z" />
    </svg>
  </SvgIcon>
);

Erase.propTypes = {
  color: PropTypes.string,
};

Erase.defaultProps = {
  color: 'currentColor',
};

export default Erase;
