import React from 'react';
import PropTypes from 'prop-types';
import SvgIcon from '../SvgIcon';
/* eslint-disable max-len */

const Datamart = props => (
  <SvgIcon {...props}>
    <svg
      focusable="false"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 17.19 17.2"
      width="24px"
      height="24px"
    >
      <g id="Layer_2" data-name="Layer 2">
        <g id="Layer_1-2" data-name="Layer 1">
          <path d="M17.19,7.35l-1-6.84A.6.6,0,0,0,15.6,0H1.6A.6.6,0,0,0,1,.51L0,7.35s0,.08,0,.12v.89a2.6,2.6,0,0,0,1,2V16.6a.6.6,0,0,0,.6.6h14a.6.6,0,0,0,.6-.6V10.38a2.55,2.55,0,0,0,1-2V7.47S17.19,7.39,17.19,7.35ZM14.6,9.78a1.43,1.43,0,0,1-1.42-1.42V8H16v.32A1.42,1.42,0,0,1,14.6,9.78ZM1.18,8.36V8H4v.32a1.42,1.42,0,1,1-2.83,0Zm4-.32H8v.32a1.42,1.42,0,1,1-2.83,0Zm4,0H12v.32a1.42,1.42,0,1,1-2.83,0ZM2.11,1.2h13l.82,5.64H1.29ZM2.19,16V14.27H15V16ZM15,13.09H2.19V10.91a2.71,2.71,0,0,0,.41,0,2.57,2.57,0,0,0,2-1,2.55,2.55,0,0,0,4,0,2.55,2.55,0,0,0,4,0,2.55,2.55,0,0,0,2,1,2.58,2.58,0,0,0,.39,0Z" />
        </g>
      </g>
    </svg>
  </SvgIcon>
);

Datamart.propTypes = {
  color: PropTypes.string,
};

Datamart.defaultProps = {
  color: 'currentColor',
};

export default Datamart;
