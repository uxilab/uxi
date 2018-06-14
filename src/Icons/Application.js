import React from 'react';
import PropTypes from 'prop-types';
import SvgIcon from '../SvgIcon';
/* eslint-disable max-len */

const Application = props => (
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
          <path d="M14.22,16H1.78A1.78,1.78,0,0,1,0,14.22V1.78A1.78,1.78,0,0,1,1.78,0H14.22A1.78,1.78,0,0,1,16,1.78V14.22A1.78,1.78,0,0,1,14.22,16ZM1.78,1.78V14.22H14.22V1.78Z" />
          <path d="M12.71,8.15v-.3a.63.63,0,0,0-.63-.63H11a3.09,3.09,0,0,0-.33-.8l.74-.74a.63.63,0,0,0,0-.89l-.21-.21a.63.63,0,0,0-.89,0l-.74.74A3.09,3.09,0,0,0,8.78,5v-1a.63.63,0,0,0-.63-.63h-.3a.63.63,0,0,0-.63.63V5a3.09,3.09,0,0,0-.8.33l-.74-.74a.63.63,0,0,0-.89,0l-.21.21a.63.63,0,0,0,0,.89l.74.74a3.09,3.09,0,0,0-.33.8h-1a.63.63,0,0,0-.63.63v.3a.63.63,0,0,0,.63.63H5a3.08,3.08,0,0,0,.33.8l-.74.74a.63.63,0,0,0,0,.89l.21.21a.63.63,0,0,0,.89,0l.74-.74a3.09,3.09,0,0,0,.8.33v1a.63.63,0,0,0,.63.63h.3a.63.63,0,0,0,.63-.63V11a3.09,3.09,0,0,0,.8-.33l.74.74a.63.63,0,0,0,.89,0l.21-.21a.63.63,0,0,0,0-.89l-.74-.74a3.08,3.08,0,0,0,.33-.8h1A.63.63,0,0,0,12.71,8.15ZM8,9.57A1.57,1.57,0,1,1,9.57,8,1.57,1.57,0,0,1,8,9.57Z" />
        </g>
      </g>
    </svg>
  </SvgIcon>
);

Application.propTypes = {
  color: PropTypes.string
};

Application.defaultProps = {
  color: '#6d6d71'
};

export default Application;
