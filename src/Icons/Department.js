import React from 'react';
import PropTypes from 'prop-types';
import SvgIcon from '../SvgIcon';
/* eslint-disable max-len */

const Department = props => (
  <SvgIcon {...props}>
    <svg focusable="false"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      width="24px"
      height="24px"
    >
      <g id="Layer_2" data-name="Layer 2">
        <g id="Layer_1-2" data-name="Layer 1">
          <path d="M16,6.65a.59.59,0,0,0-.59-.59H14.35l0-.06A6.65,6.65,0,0,0,10,1.67l-.06,0V.59A.59.59,0,0,0,9.35,0H6.65a.59.59,0,0,0-.59.59V1.66L6,1.68A6.66,6.66,0,0,0,1.67,6l0,.06H.59A.59.59,0,0,0,0,6.65V9.35a.59.59,0,0,0,.59.59H1.65l0,.06A6.66,6.66,0,0,0,6,14.33l.06,0v1.07a.59.59,0,0,0,.59.59H9.35a.59.59,0,0,0,.59-.59V14.35l.06,0A6.65,6.65,0,0,0,14.33,10l0-.06h1.06A.59.59,0,0,0,16,9.35ZM7.24,1.18H8.76V2.69H7.24ZM2.69,8.76H1.18V7.24H2.69Zm6.06,6.06H7.24V13.31H8.76Zm4-4.88h.4l0,.12a5.51,5.51,0,0,1-3,3l-.12,0v-.4a.59.59,0,0,0-.59-.59H6.65a.59.59,0,0,0-.59.59v.4l-.12,0a5.52,5.52,0,0,1-3-3l0-.12h.4a.59.59,0,0,0,.59-.59V6.65a.59.59,0,0,0-.59-.59h-.4l0-.12a5.52,5.52,0,0,1,3-3l.12,0v.4a.59.59,0,0,0,.59.59H9.35a.59.59,0,0,0,.59-.59v-.4l.12,0a5.51,5.51,0,0,1,3,3l0,.12h-.4a.59.59,0,0,0-.59.59V9.35A.59.59,0,0,0,12.72,9.94Zm2.11-1.18H13.31V7.24h1.52Z" />
        </g>
      </g>
    </svg>
  </SvgIcon>
);

Department.propTypes = {
  color: PropTypes.string,
};

Department.defaultProps = {
  color: '#6d6d71',
};

export default Department;
