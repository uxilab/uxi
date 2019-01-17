import React from 'react';
import PropTypes from 'prop-types';
import SvgIcon from '../SvgIcon';
/* eslint-disable max-len */

const List = props => (
  <SvgIcon {...props}>
    <svg
      focusable="false"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 14.2"
      width="24px"
      height="24px"
    >
      <g id="Layer_2" data-name="Layer 2">
        <g id="Layer_1-2" data-name="Layer 1">
          <rect y="4.2" width="1.59" height="1.59" />
          <rect x="3.52" y="4.2" width="12.48" height="1.59" />
          <rect y="8.4" width="1.59" height="1.59" />
          <rect x="3.52" y="8.4" width="12.48" height="1.59" />
          <rect y="12.61" width="1.59" height="1.59" />
          <rect x="3.52" y="12.61" width="12.48" height="1.59" />
          <rect width="1.59" height="1.59" />
          <rect x="3.52" width="12.48" height="1.59" />
        </g>
      </g>
    </svg>
  </SvgIcon>
);

List.propTypes = {
  color: PropTypes.string,
};

List.defaultProps = {
  color: 'currentColor',
};

export default List;
