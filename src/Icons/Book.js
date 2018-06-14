import React from 'react';
import PropTypes from 'prop-types';
import SvgIcon from '../SvgIcon';
/* eslint-disable max-len */

const Book = props => (
  <SvgIcon {...props}>
    <svg
      focusable="false"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 18.57 15.74"
      width="24px"
      height="24px"
    >
      <g id="Layer_2" data-name="Layer 2">
        <g id="Layer_1-2" data-name="Layer 1">
          <path d="M0,13.05a.82.82,0,0,0,.82.82H7.07l1.64,1.64a.83.83,0,0,0,1.15,0l1.64-1.64h6.25a.82.82,0,0,0,.82-.82V.82A.82.82,0,0,0,17.76,0H11.17a.82.82,0,0,0-.58.24L9.29,1.54,8,.24A.82.82,0,0,0,7.4,0H.82A.82.82,0,0,0,0,.82ZM10.1,3l1.4-1.4h5.43v10.6H11.17a.82.82,0,0,0-.58.24L10.1,13ZM1.63,1.63H7.07L8.47,3V13L8,12.47a.82.82,0,0,0-.58-.24H1.63Z" />
        </g>
      </g>
    </svg>
  </SvgIcon>
);

Book.propTypes = {
  color: PropTypes.string
};

Book.defaultProps = {
  color: '#6d6d71'
};

export default Book;
