import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { flexStylesCSSString } from '../Layout/flexStyles';
import GlobalMenuContainer from './GlobalMenuContainer';
import GlobalMenuItem from './GlobalMenuItem';
import GlobalMenuSubItem from './GlobalMenuSubItem';
import GlobalMenuPanel from './GlobalMenuPanel';

const FlexExtended = styled.div`
  ${flexStylesCSSString};
  position: absolute;
  top: auto;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 97;
  height: 100%;
  background: ${({ theme: { palette } }) => palette.primary.dark || '#15303f'};
`;

const GlobalMenuWrapper = ({
  selectedKey,
  logo,
  backgroundColor,
  primaryColor,
  menuDescriptors,
  attachToViewport,
  innerStyle,
  fullViewportWidthPanel,
  handlePanelClickOutside,
  breakpoint,
  menuWidth,
  bigMenuWidth,
  panelOffsetTop,
  panelOffsetBottom,
}) => {
  const menuDescriptorsContent = [];

  (menuDescriptors || []).forEach((menuDescriptor) => {
    menuDescriptorsContent.push(
      <GlobalMenuItem
        breakpoint={breakpoint}
        key={`${menuDescriptor.key}-rootitem`}
        isSelected={menuDescriptor.isSelected}
        isActive={menuDescriptor.isActive}
        onClick={() => {
          if (menuDescriptor.onClick && menuDescriptor.onClick) {
            menuDescriptor.onClick();
          }
        }}
        hasNew={menuDescriptor.hasNew}
        label={menuDescriptor.displayName}
        index={menuDescriptor.key}
        dataKey={menuDescriptor.key}
        icon={menuDescriptor.icon}
        Link={menuDescriptor.Link}
        to={menuDescriptor.to}
        href={menuDescriptor.href}
        primaryColor={primaryColor}
        hasPanel={!!menuDescriptor.panel}
      />
    );

    if (menuDescriptor.children && menuDescriptor.children.length > 0) {
      menuDescriptor.children.forEach((child, idx, list) => {
        menuDescriptorsContent.push(
          <GlobalMenuSubItem
            breakpoint={breakpoint}
            isFirstSubItem={idx === 0}
            isLastSubItem={idx === list.length - 1}
            key={`${menuDescriptor.key}-subitem-${child.key}`}
            isSelected={child.isSelected}
            isParentSelected={menuDescriptor.isSelected}
            isActive={child.isActive}
            onClick={child.onClick}
            hasNew={child.hasNew}
            content={child.content}
            label={child.displayName}
            index={child.key}
            primaryColor={primaryColor}
            Link={child.Link}
            to={child.to}
            href={child.href}
          />
        );
      });
    }

    if (menuDescriptor && menuDescriptor.panel) {
      menuDescriptorsContent.push(
        /* this wrapper div required for layout context */
        <div
          key={`${menuDescriptor.key}-panel-${menuDescriptor.panel.key}`}
        >
          <GlobalMenuPanel
            panelOffsetTop={panelOffsetTop}
            panelOffsetBottom={panelOffsetBottom}
            onClickOutside={() => { handlePanelClickOutside(menuDescriptor.key); }}
            Title={menuDescriptor.panel.Title}
            Content={menuDescriptor.panel.Content}
            Action={menuDescriptor.panel.Action}
            width={menuDescriptor.panel.width}
            fullWidth={menuDescriptor.panel.fullWidth}
            isOpen={menuDescriptor.key === selectedKey}
            attachToViewport={attachToViewport}
            fullViewportWidthPanel={fullViewportWidthPanel}
          />
        </div>
      );
    }
  });

  const gapFiller = <FlexExtended key="single-gap-filler" />;

  return (
    <GlobalMenuContainer
      breakpoint={breakpoint}
      menuWidth={menuWidth}
      bigMenuWidth={bigMenuWidth}
      backgroundColor={backgroundColor}
      attachToViewport={attachToViewport}
      innerStyle={innerStyle}
      fullViewportWidthPanel={fullViewportWidthPanel}
    >
      {logo}
      {menuDescriptorsContent}
      {fullViewportWidthPanel && gapFiller}
    </GlobalMenuContainer>
  );
};

GlobalMenuWrapper.propTypes = {
  selectedKey: PropTypes.string,
  logo: PropTypes.node,
  backgroundColor: PropTypes.string,
  primaryColor: PropTypes.string,
  menuDescriptors: PropTypes.array,
};

GlobalMenuWrapper.defaultProps = {
  selectedKey: '',
  activeKey: '',
  logo: null,
  backgroundColor: '',
  primaryColor: '',
  menuDescriptors: [],
};

export default GlobalMenuWrapper;
