import React from 'react';
import PropTypes from 'prop-types';
import SvgIcon from '../SvgIcon';
/* eslint-disable max-len */

const Wikipedia = props => (
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
          <path d="M8,0a8,8,0,1,0,8,8A8,8,0,0,0,8,0Zm5.81,5.21a1.11,1.11,0,0,0-.7.23,1.33,1.33,0,0,0-.36.57s-2,5-2.66,6.65c-.26.54-.52.49-.74,0s-.87-2-1.3-3.08C7.59,10.6,7,12,6.65,12.65s-.55.5-.75,0C5.21,10.87,3.79,7.73,3.12,6a2,2,0,0,0-.31-.61,1,1,0,0,0-.55-.15c-.1,0-.16,0-.16-.08V4.88l.07,0h2.7l.11,0v.23c0,.06-.12.1-.19.1H4.43c-.24,0-.36.09-.36.23a1,1,0,0,0,.08.32c.53,1.42,2.36,5.67,2.36,5.67l.07,0L7.77,8.88l-.24-.58L6.72,6.55l-.21-.47c-.36-.78-.35-.82-.71-.87-.1,0-.16,0-.16-.08V4.86H7.73v.27c0,.06,0,.08-.06.08l-.1,0c-.39,0-.32.21-.07.77l.78,1.75.86-1.89c.14-.35.12-.43.06-.51a.54.54,0,0,0-.39-.13H8.72s0,0-.06,0,0,0,0-.07V4.85h2l0,0v.23c0,.06,0,.1-.09.1-.32,0-.38.05-.49.24s-.19.32-.32.56L8.6,8.31l0,.07,1.37,3.08.08,0,2.16-5.63c.07-.23.06-.39,0-.48a.54.54,0,0,0-.42-.16h-.22a.22.22,0,0,1-.11,0s-.11,0-.11-.07V4.88l.17,0h2.44v.26C13.9,5.17,13.87,5.21,13.81,5.21Z" />
        </g>
      </g>
    </svg>
  </SvgIcon>
);

Wikipedia.propTypes = {
  color: PropTypes.string,
};

Wikipedia.defaultProps = {
  color: 'currentColor',
};

export default Wikipedia;
