import React from 'react';
import PropTypes from 'prop-types';
import SvgIcon from '../SvgIcon';
/* eslint-disable max-len */

const Search = props => (
  <SvgIcon {...props}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      width="24px"
      height="24px"
    >
      <g id="Layer_2" data-name="Layer 2">
        <g id="Layer_1-2" data-name="Layer 1">
          <path d="M16,14.56l-3.93-3.93a6.68,6.68,0,1,0-1.44,1.44L14.56,16ZM2.9,10.46a5.35,5.35,0,1,1,7.56,0A5.35,5.35,0,0,1,2.9,10.46Z" />
        </g>
      </g>
    </svg>
  </SvgIcon>
);

Search.propTypes = {
  color: PropTypes.string
};

Search.defaultProps = {
  color: '#6d6d71'
};

export default Search;
