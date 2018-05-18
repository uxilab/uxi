import React from 'react';
import styled from 'styled-components';
import {
  Done as SuccessIcon,
  Issue as ErrorIcon,
} from '../../Icons';

/* eslint-disable no-nested-ternary */
const StatusIconUI = styled.span`
  position: absolute;
  right: 8px;
  top: 9px;
  color: ${({ error, success, theme: { palette: { semantic } } }) => (error
    ? semantic.error
    : (success ? semantic.success : semantic.default)
  )};
  & > svg,
  & > svg * {
    fill: currentColor !important;
    color: currentColor !important;
  }
`;

const StatusIcon = ({ error, success, style }) => {
  const stateIcon = error // eslint-disable-line no-nested-ternary
    ? <ErrorIcon size="16" />
    : (success ? <SuccessIcon size="16" /> : null
    );

  return (
    <StatusIconUI error={error} success={success} style={style}>
      {stateIcon}
    </StatusIconUI>
  );
};

StatusIcon.displayName = 'StatusIcon';


export default StatusIcon;
