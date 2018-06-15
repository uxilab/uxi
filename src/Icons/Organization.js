import React from 'react';
import PropTypes from 'prop-types';
import SvgIcon from '../SvgIcon';
/* eslint-disable max-len */

const Organization = props => (
  <SvgIcon {...props}>
    <svg
      focusable="false"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 17.91 16"
      width="24px"
      height="24px"
    >
      <g id="Layer_2" data-name="Layer 2">
        <g id="Layer_1-2" data-name="Layer 1">
          <path d="M16.27,9h.93a.76.76,0,0,0,.71-.79v-3a.8.8,0,0,0-.4-.71L9.27.08a.66.66,0,0,0-.63,0L.4,4.59A.8.8,0,0,0,0,5.3v3A.76.76,0,0,0,.71,9h.93v6.17a.76.76,0,0,0,.71.79H15.55a.76.76,0,0,0,.71-.79Zm-5.38,5.38H7V10a1.93,1.93,0,1,1,3.86,0Zm4.66-7a.76.76,0,0,0-.71.79v6.17H12V10a3,3,0,0,0-6.07,0v4.46H3.08V8.25a.76.76,0,0,0-.71-.79H1.43V5.79l.06,0L9,1.67,9,1.7l7.48,4.09V7.46Z" />
        </g>
      </g>
    </svg>
  </SvgIcon>
);

Organization.propTypes = {
  color: PropTypes.string,
};

Organization.defaultProps = {
  color: '#6d6d71',
};

export default Organization;
