import React from 'react';
import PropTypes from 'prop-types';
import SvgIcon from '../SvgIcon';
/* eslint-disable max-len */

const News = props => (
  <SvgIcon {...props}>
    <svg
      focusable="false"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 13.23"
      width="24px"
      height="24px"
    >
      <g id="Layer_2" data-name="Layer 2">
        <g id="Layer_1-2" data-name="Layer 1">
          <rect x="6.53" y="4.67" width="6.48" height="1.3" />
          <rect x="6.53" y="7.26" width="6.48" height="1.3" />
          <path d="M16,1.9A1.9,1.9,0,0,0,14.1,0H5.38a1.9,1.9,0,0,0-1.9,1.9V5.36H1.61A1.61,1.61,0,0,0,0,7v3.82a2.45,2.45,0,0,0,2.44,2.44H14.1a1.9,1.9,0,0,0,1.9-1.9ZM3.2,11.54a1,1,0,0,1-.75.29,1.05,1.05,0,0,1-1.05-1V7a.22.22,0,0,1,.21-.21H3.49v4.08A1,1,0,0,1,3.2,11.54Zm11.41-.21a.51.51,0,0,1-.5.5H4.67l.05-.14a2.37,2.37,0,0,0,.16-.86V1.9a.51.51,0,0,1,.5-.5H14.1a.51.51,0,0,1,.5.5Z" />
        </g>
      </g>
    </svg>
  </SvgIcon>
);

News.propTypes = {
  color: PropTypes.string,
};

News.defaultProps = {
  color: '#6d6d71',
};

export default News;
