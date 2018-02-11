import React from 'react';
import PropTypes from 'prop-types';
import GlobalMenuContainer from './GlobalMenuContainer';
import GlobalMenuItem from './GlobalMenuItem';
import GlobalMenuSubItem from './GlobalMenuSubItem';

const GlobalMenuWrapper = ({
  selectedKey,
  logo,
  activeKey,
  backgroundColor,
  primaryColor,
  menuDescriptors,
  attachToViewport,
  innerStyle,
  fullViewportWidthPanel,
}) => {
  const menuDescriptorsContent = [];

  (menuDescriptors || []).forEach((menuDescriptor) => {
    menuDescriptorsContent.push(
      <GlobalMenuItem
        key={menuDescriptor.key}
        isSelected={menuDescriptor.isSelected}
        isActive={menuDescriptor.isActive}
        onClick={menuDescriptor.onClick}
        hasNew={menuDescriptor.hasNew}
        label={menuDescriptor.displayName}
        index={menuDescriptor.key}
        Icon={menuDescriptor.Icon}
        primaryColor={primaryColor}
      />,
    );

    if (menuDescriptor.children && menuDescriptor.children.length > 0) {
      menuDescriptor.children.forEach((child) => {
        menuDescriptorsContent.push(
          <GlobalMenuSubItem
            key={child.key}
            isSelected={child.isSelected}
            isParentSelected={menuDescriptor.isSelected}
            isActive={child.isActive}
            onClick={child.onClick}
            hasNew={child.hasNew}
            content={child.content}
            displayName={child.displayName}
            index={child.key}
            primaryColor={primaryColor}
          />,
        );
      });
    }
  });

  return (
    <GlobalMenuContainer
      backgroundColor={backgroundColor}
      attachToViewport={attachToViewport}
      innerStyle={innerStyle}
      fullViewportWidthPanel={fullViewportWidthPanel}
    >
      {logo}
      {menuDescriptorsContent}
    </GlobalMenuContainer>
  );
};

GlobalMenuWrapper.propTypes = {
  selectedKey: PropTypes.string,
  activeKey: PropTypes.string,
  logo: PropTypes.node,
  backgroundColor: PropTypes.string,
  primaryColor: PropTypes.string,
  menuDescriptors: PropTypes.array,
};

export default GlobalMenuWrapper;
