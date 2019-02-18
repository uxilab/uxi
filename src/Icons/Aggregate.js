import React from 'react';
import PropTypes from 'prop-types';
import SvgIcon from '../SvgIcon';
/* eslint-disable max-len */

const Aggregate = props => (
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
          <path d="M15.4,14.8h-3V9.73a.6.6,0,0,0-1.2,0V14.8H8.6V6.12a.6.6,0,0,0-1.2,0V14.8H4.78V9.73a.6.6,0,0,0-.6-.6.6.6,0,0,0-.6.6V14.8H1.2V.6A.6.6,0,0,0,0,.6V15.4a.6.6,0,0,0,.6.6H15.4a.6.6,0,0,0,0-1.2Z" />
          <path d="M4.18,7.91A1.61,1.61,0,0,0,5.79,6.3a1.64,1.64,0,0,0-.36-1L7,3.83a1.59,1.59,0,0,0,1,.39,1.63,1.63,0,0,0,1.09-.43l1.52,1.46a1.57,1.57,0,0,0-.4,1,1.61,1.61,0,1,0,1.61-1.61,1.75,1.75,0,0,0-.4,0L9.57,3a2.2,2.2,0,0,0,0-.36,1.61,1.61,0,1,0-3.22,0A1.42,1.42,0,0,0,6.45,3L4.65,4.76a1.78,1.78,0,0,0-.47-.07,1.61,1.61,0,0,0,0,3.22ZM12.5,6.3a.68.68,0,0,1-.68.69.69.69,0,1,1,0-1.38A.68.68,0,0,1,12.5,6.3ZM8,1.92a.69.69,0,0,1,.69.69.69.69,0,0,1-1.38,0A.69.69,0,0,1,8,1.92ZM4.18,5.61A.69.69,0,1,1,4.18,7a.69.69,0,0,1,0-1.38Z" />
        </g>
      </g>
    </svg>
  </SvgIcon>
);

Aggregate.propTypes = {
  color: PropTypes.string,
};

Aggregate.defaultProps = {
  color: 'currentColor',
};

export default Aggregate;
