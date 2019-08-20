import React from 'react';
import styled from 'styled-components';
import { Close } from '../Icons';
import { appLayoutCSSString } from '../Layout';
import {
  headerHeight,
} from './defaults';

const HorizontalAppLayout = styled.div`
  ${appLayoutCSSString};
  flex-flow: row wrap;
  align-items: center;
  width: 100%;
`;

const PanelHeaderUI = styled.div`
  box-sizing: border-box;
  background-color: ${({ theme: { palette } }) => palette.accent.main};
  transition: ${({ theme: { transition } }) => transition.defaultAll};
  * { transition: ${({ theme: { transition } }) => transition.defaultAll}; }
  padding: 8px 16px;
  color: ${({ theme: { palette } }) => palette.pureWhite};
  display: flex;
  align-items: center;
  min-height: 50px;
  min-height: ${headerHeight};
  border-radius: ${({ round, theme: { radius } }) => round && `${radius} ${radius} 0 0`};
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
  opacity: .7;
  &:hover {
    opacity: 1;
    transform: scale(1.15);
    transform-origin: center;
  }
`;

const PanelHeader = (props) => {
  const {
    children,
    title,
    hasClose,
    onClose,
    style,
    rounded,
    // iconColor, // = '#ceceec',
    // iconHoverColor, // = '#ffffff',
  } = props;

  const close = (hasClose || onClose)
    ? (
      <CloseWrapperUI tabindex="0" onClick={onClose}>
        <Close size="14px" />
      </CloseWrapperUI>
    )
    : null;

  return (
    <PanelHeaderUI style={style} round={rounded || undefined}>
      <HorizontalAppLayout>
        <PanelHeaderTitleWrapper>{title}</PanelHeaderTitleWrapper>
        <div>{children}</div>
        <div>{close}</div>
      </HorizontalAppLayout>
    </PanelHeaderUI>
  );
};

PanelHeader.displayName = 'PanelHeader';

PanelHeader.defaultProps = {
  title: null,
};

export default PanelHeader;
