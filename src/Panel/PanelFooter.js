import React from 'react';
import styled from 'styled-components';
import { FlatButton } from '../Button';

const PanelFooterUI = styled.div`
  background-color: ${({ theme: { palette } }) => palette.white};
  border-top: 1px solid ${({ theme: { palette } }) => palette.lightGrey};
  padding: 8px 16px;
  display: flex;
  justify-content: flex-end;
`;

const PanelFooter = (props) => {
  const { children, hasCancel, cancelLabel, onClose, style } = props;

  const cancel = (
    hasCancel &&
      <FlatButton onClick={onClose} style={{ marginRight: '16px' }}>
        {cancelLabel || 'Cancel'}
      </FlatButton>
  );

  return (
    <PanelFooterUI style={style} >
      {cancel}
      {children}
    </PanelFooterUI>
  );
};

PanelFooter.displayName = 'PanelFooter';

export default PanelFooter;
