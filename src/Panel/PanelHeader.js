import React from 'react';
import styled from 'styled-components';
import { Close } from '../Icons';
import { AppLayout } from '../Layout';

const HorizontalAppLayout = AppLayout.extend`
  flex-flow: row wrap;
  align-items: center;
  width: 100%;
`;

const PanelHeaderUI = styled.div`
  box-sizing: border-box;
  background-color: ${({ theme: { palette } }) => palette.accent.main};
  padding: 8px 16px;
  color: ${({ theme: { palette } }) => palette.pureWhite};
  display: flex;
  align-items: center;
  min-height: 50px;
`;

const PanelHeaderTitleWrapper = styled.div`
  font-weight: bold;
`;

const CloseWrapperUI = styled.div`
  margin-left: auto;
  cursor: pointer;
  display: flex;
  align-items: center;
  & * {
    fill: currentColor;
  }
`;

const PanelHeader = (props) => {
  const {
    children,
    title,
    hasClose,
    onClose,
    style,
    iconColor,// = '#ceceec',
    iconHoverColor,// = '#ffffff',
  } = props;

  const close = (hasClose || onClose)
    ? (
      <CloseWrapperUI tabindex="0" onClick={onClose}>
        <Close size="14px" />
      </CloseWrapperUI>
    )
    : null;

  return (
    <PanelHeaderUI style={style} >
      <HorizontalAppLayout>
        <PanelHeaderTitleWrapper>{title}</PanelHeaderTitleWrapper>
        <div>{children}</div>
        <div>{close}</div>
      </HorizontalAppLayout>
    </PanelHeaderUI>
  );
};

PanelHeader.displayName = 'PanelHeader';

export default PanelHeader;
