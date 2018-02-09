import React from 'react';
import { Close } from '../Icons';
import styled from 'styled-components';
import { IconButton } from '../Button';

const PanelHeaderUI = styled.div`
  background-color: ${({ theme: { palette } }) => palette.accent.main};
  padding: 16px;
  color: ${({ theme: { palette } }) => palette.pureWhite};
  display: flex;
  align-items: center;
  font-weight: bold;
`;

const CloseWrapperUI = styled.div`
  margin-left: auto;
`;

const PanelHeader = (props) => {
  const { title, hasClose, onClose, style } = props;

  const close = hasClose
    ? (
      <CloseWrapperUI tabindex="0" onClick={onClose}>
        <Close size="14px" color="#ceceec" hoverColor="#fff" />
      </CloseWrapperUI>
    )
    : null;

  return (
    <PanelHeaderUI style={style} >
      {title}
      {close}
    </PanelHeaderUI>
  );
};

PanelHeader.displayName = 'PanelHeader';

export default PanelHeader;
