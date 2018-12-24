import React from 'react';
import styled from 'styled-components';
import { Button } from '../Button';

const PanelFooterUI = styled.div`
  box-sizing: border-box;
  background-color: ${({ theme: { palette } }) => palette.white};
  border-top: 1px solid ${({ theme: { palette } }) => palette.lightGrey};
  padding: 8px 16px;
  display: flex;
  justify-content: flex-end;
  min-height: 50px;
  border-radius: ${({ rounded, theme: { radius } }) => rounded && `0 0 ${radius} ${radius}`};
`;

const PanelFooter = (props) => {
  const {
    children,
    hasCancel,
    cancelLabel,
    onClose,
    style,
    rounded,
  } = props;

  const cancel = (hasCancel || onClose)
    ? (<Button onClick={onClose} style={{ marginLeft: '16px' }}>
      {cancelLabel}
    </Button>)
    : null;

  return (
    <PanelFooterUI style={style} rounded={rounded}>
      {children}
      {cancel}
    </PanelFooterUI>
  );
};

PanelFooter.displayName = 'PanelFooter';

PanelFooter.defaultProps = {
  cancelLabel: 'Cancel',
}

export default PanelFooter;
