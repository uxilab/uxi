import React from 'react';
import styled from 'styled-components';
import { Close } from '../Icons';

const LightPanelHeaderUI = styled.div`
  box-sizing: border-box;
  /* background-color: ${({ theme: { palette } }) => palette.accent.main}; */
  padding: 8px 16px;
  color: ${({ theme: { palette } }) => palette.black};
  display: flex;
  align-items: center;
  font-weight: bold;
  min-height: 32px;
  border-bottom: 1px solid ${({ theme: { palette } }) => palette.lightGrey};
`;

const CloseWrapperUI = styled.div`
  margin-left: auto;
  cursor: pointer;
  font-size: normal;
  font-weight: normal;
`;

const LightPanelHeader = (props) => {
  const { title, hasClose, onClose, style, closeLabel } = props;

  const close = (hasClose || closeLabel)
    ? (
      <CloseWrapperUI tabindex="0" onClick={onClose}>
        {closeLabel || <Close size="14px" color="#d7d7d7" hoverColor="#fff" />
        }
      </CloseWrapperUI>
    )
    : null;

  return (
    <LightPanelHeaderUI style={style} >
      {title}
      {close}
    </LightPanelHeaderUI>
  );
};

LightPanelHeader.displayName = 'LightPanelHeader';

export default LightPanelHeader;
