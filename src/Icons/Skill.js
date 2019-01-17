import React from 'react';
import PropTypes from 'prop-types';
import SvgIcon from '../SvgIcon';
/* eslint-disable max-len */

const Skill = props => (
  <SvgIcon {...props}>
    <svg
      focusable="false"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 19.31 15.75"
      width="24px"
      height="24px"
    >
      <g id="Layer_2" data-name="Layer 2">
        <g id="Layer_1-2" data-name="Layer 1">
          <path d="M4,12.27l.44.22A10.48,10.48,0,0,0,9.65,14a10.49,10.49,0,0,0,5.23-1.47l.44-.22a.76.76,0,0,0,.42-.68V7.15l3.08-1.23a.76.76,0,0,0,.06-1.39L10,.08a.78.78,0,0,0-.68,0L.42,4.52a.78.78,0,0,0-.34.35A1,1,0,0,0,0,5.21v5.13a.76.76,0,0,0,1.53,0v-4l2,.81v4.44A.76.76,0,0,0,4,12.27Zm10.24-1.16-.94.47a8.16,8.16,0,0,1-7.27,0l-.94-.47V7.76L9.37,9.47a.77.77,0,0,0,.57,0l4.29-1.71Zm-11.59-6,7-3.51.06,0,7,3.48-7,2.81Z" />
          <path d="M.76,12.44a.76.76,0,0,0-.76.76V15a.76.76,0,0,0,1.53,0V13.21A.76.76,0,0,0,.76,12.44Z" />
        </g>
      </g>
    </svg>
  </SvgIcon>
);

Skill.propTypes = {
  color: PropTypes.string,
};

Skill.defaultProps = {
  color: 'currentColor',
};

export default Skill;
