import React from 'react';
import PropTypes from 'prop-types';
import SvgIcon from '../SvgIcon';
/* eslint-disable max-len */

const Idea = props => (
  <SvgIcon {...props}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 11.77 16"
      width="24px"
      height="24px"
    >
      <g id="Layer_2" data-name="Layer 2">
        <g id="Layer_1-2" data-name="Layer 1">
          <path d="M9.59,1.31a5.88,5.88,0,1,0-7.43,9.12.35.35,0,0,1,.14.24V11a3.54,3.54,0,0,0,.05.52H3.89A2,2,0,0,1,3.82,11v-.29a1.83,1.83,0,0,0-.7-1.41A4.37,4.37,0,0,1,4.93,1.61a4.57,4.57,0,0,1,.94-.1A4.37,4.37,0,0,1,8.63,9.28a1.78,1.78,0,0,0-.68,1.38V11a2,2,0,0,1-.08.52H9.41A3.54,3.54,0,0,0,9.46,11v-.32a.3.3,0,0,1,.12-.21,5.88,5.88,0,0,0,0-9.14Z" />
          <path d="M8.6,13.21H3.17a.54.54,0,0,1,0-1.08H8.6a.54.54,0,0,1,0,1.08Z" />
          <path d="M7.85,14.61H3.91a.54.54,0,0,1,0-1.08H7.85a.54.54,0,0,1,0,1.08Z" />
          <path d="M7.35,16H4.42a.54.54,0,0,1,0-1.08H7.35a.54.54,0,0,1,0,1.08Z" />
        </g>
      </g>
    </svg>
  </SvgIcon>
);

Idea.propTypes = {
  color: PropTypes.string,
};

Idea.defaultProps = {
  color: '#6d6d71',
};

export default Idea;
