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
`;

const PanelFooter = (props) => {
  const { children, hasCancel, cancelLabel, onClose, style } = props;

  const cancel = (
    hasCancel &&
      <Button onClick={onClose} style={{ marginLeft: '16px' }}>
        {cancelLabel || 'Cancel'}
      </Button>
  );

  return (
    <PanelFooterUI style={style} >
      {children}
      {cancel}
    </PanelFooterUI>
  );
};

PanelFooter.displayName = 'PanelFooter';

export default PanelFooter;
