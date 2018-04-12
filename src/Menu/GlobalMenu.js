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

  componentDidMount() {
    const {
      menuDescriptors,
    } = this.props;

    const firstActiveFound = menuDescriptors.find(menuDescriptor => {
      return menuDescriptor.isActive === true
    });

    if (firstActiveFound) {
      const activeChild = (
        firstActiveFound
        && firstActiveFound.children
        && firstActiveFound.children.find(child => child.isActive)
      );

      if (activeChild) {
        this.changeSelected(activeChild.key)
      } else {
        this.changeSelected(firstActiveFound.key)
      }
    }
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
    const newSelectedActiveKeyValue = (value === this.state.selected) ? '' : this.state.selected;

    this.setState({
      selected: newSelectedKeyValue,
      active: newSelectedActiveKeyValue,
    });
  }

  render() {
    const {
      menuDescriptors,
      onLogoClick,
      logoDescriptor,
      attachToViewport,
      style,
      innerStyle,
      fullViewportWidthPanel: fullViewportWidthPanelProp,
    } = this.props;

    const fullViewportWidthPanel = attachToViewport ? true : fullViewportWidthPanelProp;

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

          const {
            children, // single sublevel for now
            ...menuDescriptorProps,
          } = menuDescriptor;

          menuDescriptorChildren.push({
            ...menuDescriptorProps,
            ...m, // not react children
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
        isSelected: isSelected || isMenuSelected || menuDescriptor.isActive,
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

    const theLogo = (
      <GlobalMenuLogo
        key={logoDescriptor.key || 'GlobalMenuMainLogo'}
        label={(logoDescriptor.displayName || '')}
        icon={logoDescriptor.icon}
        Link={logoDescriptor.Link}
        to={logoDescriptor.to}
        href={logoDescriptor.href}
        // primaryColor={'red'}
        logoTooltipLabel={logoDescriptor.tooltipLabel || logoDescriptor.displayName || ''}
        activeKey={active}
        isActive={(active === logoDescriptor.key || active === 'GlobalMenuMainLogo')}
        onClick={logoDescriptor.onClick}
        onClick={() => {
          this.changeSelected(logoDescriptor.key || 'GlobalMenuMainLogo');
            if (logoDescriptor.onClick) {
              logoDescriptor.onClick();
            }
          }
        }
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
            handlePanelClickOutside={this.handleClickOutside.bind(this)}
          />
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

GlobalMenu.defaultProps = {
  menuDescriptors: [],
};

export default GlobalMenu;
