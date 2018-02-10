import React, { Component } from 'react';
import PropTypes from 'prop-types';
import GlobalMenuWrapper from './GlobalMenuWrapper';
import GlobalMenuPanel from './GlobalMenuPanel';
import GlobalMenuLogo from './GlobalMenuLogo';

class GlobalMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: props.initialSelected ? props.initialSelected : '',
    };
  }

  getSelected(key) {
    const { selected } = this.state;

    return (selected === key);
  }

  changeSelected(value) {
    this.setState({
      active: value,
      selected: value,
    });
  }

  handleClickOutside(value) {
    const newSelectedKeyValue = (value === this.state.selected) ? '' : this.state.selected;

    this.setState({
      selected: newSelectedKeyValue,
    });
  }

  render() {
    const {
      menuDescriptors,
      onLogoClick,
      logoIcon,
      logoText,
      logoTooltipLabel,
      attachToViewport,
      style,
      innerStyle,
      fullViewportWidthPanel,
    } = this.props;

    const {
      selected,
      active,
    } = this.state;

    const menuDescriptorWithActiveAndSelected = (menuDescriptors || []).map((menuDescriptor) => {
      const isSelected = this.getSelected(menuDescriptor.key);
      const menuDescriptorChildren = [];
      let isMenuSelected;

      if (menuDescriptor.children) {
        menuDescriptor.children.forEach((m) => {
          const isChildrenSelected = this.getSelected(m.key);
          if (isChildrenSelected) {
            isMenuSelected = true;
          }
          menuDescriptorChildren.push({
            ...menuDescriptor,
            isSelected: isChildrenSelected,
            isOpen: !!(isChildrenSelected && m.panel && m.panel.Content),
            onClick: () => {
              this.changeSelected(m.key);
              if (m.onClick) {
                m.onClick();
              }
            },
          });
        });
      }
      return {
        ...menuDescriptor,
        isSelected: isSelected || isMenuSelected,
        isOpen: !!(isSelected && menuDescriptor.panel && menuDescriptor.panel.Content),
        onClick: () => {
          this.changeSelected(menuDescriptor.key);
          if (menuDescriptor.onClick) {
            menuDescriptor.onClick();
          }
        },
        children: menuDescriptorChildren,
      };
    });

    const menuDescriptorsPanel = (menuDescriptorWithActiveAndSelected || [])
      .map((menuDescriptor) => {
        if (menuDescriptor && menuDescriptor.panel) {
          return (
            <GlobalMenuPanel
              key={menuDescriptor.key}
              onClickOutside={() => { this.handleClickOutside(menuDescriptor.key); }}
              Title={menuDescriptor.panel.Title}
              Content={menuDescriptor.panel.Content}
              Action={menuDescriptor.panel.Action}
              width={menuDescriptor.panel.width}
              fullWidth={menuDescriptor.panel.fullWidth}
              isOpen={menuDescriptor.isOpen}
              attachToViewport={attachToViewport}
              fullViewportWidthPanel={fullViewportWidthPanel}
            />
          );
        }

        return null;
      });

    const theLogo = (
      <GlobalMenuLogo
        key={'GlobalMenuMainLogo'}
        onClick={onLogoClick}
        label={(logoText || '')}
        icon={logoIcon}
        primaryColor={'red'}
        logoTooltipLabel={logoTooltipLabel}
      />
    );

    const layoutContext = attachToViewport
      ? { position: 'fixed', zIndex: 80, top: 0, left: 0, bottom: 0, overflowX: 'hidden' }
      : { position: 'relative', ...(fullViewportWidthPanel ? {} : { overflowX: 'hidden' }) };

    return (
      <div style={{ ...layoutContext, ...style }}>
        <div>
          <GlobalMenuWrapper
            logo={theLogo}
            onLogoClick={onLogoClick}
            selectedKey={selected}
            activeKey={active}
            menuDescriptors={menuDescriptorWithActiveAndSelected}
            attachToViewport={attachToViewport}
            innerStyle={innerStyle}
            fullViewportWidthPanel={fullViewportWidthPanel}
          />

          {/* This wrapper div creates the context to wrap the 'fixed' panels
              which allow us to control the stacking order */}
          <div>
            {menuDescriptorsPanel}
          </div>
        </div>
      </div>
    );
  }
}

GlobalMenu.propTypes = {
  initialActive: PropTypes.string,
  initialSelected: PropTypes.string,
  onLogoClick: PropTypes.func,
  backgroundColor: PropTypes.string,
  Logo: PropTypes.any,
  primaryColor: PropTypes.string,
  menuDescriptors: PropTypes.array,
  style: PropTypes.object,
};

export default GlobalMenu;
