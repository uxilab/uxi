import React, { Component } from 'react';
import PropTypes from 'prop-types';
import GlobalMenuWrapper from './GlobalMenuWrapper';
import GlobalMenuLogo from './GlobalMenuLogo';

class GlobalMenu extends Component {
  constructor(props) {
    super(props);
    const initialSelected = props.initialSelected;
    const firstActiveMaybe = this.getFirstActiveFoundMaybe();
    this.state = {
      selected: initialSelected || (firstActiveMaybe || ''),
    };
  }

  componentDidMount() {
    const firstActiveFound = this.getFirstActiveFoundMaybe();

    if (firstActiveFound) {
      const activeChild = (
        firstActiveFound
        && firstActiveFound.children
        && firstActiveFound.children.find(child => child.isActive)
      );

      if (activeChild) {
        this.changeSelected(activeChild.key);
      } else {
        this.changeSelected(firstActiveFound.key);
      }
    }
  }

  componentDidUpdate(prevProps) {
    const { selected } = this.state;

    if (prevProps.menuDescriptors !== this.props.menuDescriptors) {
      const firstActive = this.getFirstActiveFoundMaybe();
      if (!firstActive) {
        this.changeSelected('');
      } else {
        if (firstActive.key !== selected) { // eslint-disable-line
          this.changeSelected(firstActive.key);
        }
      }
    }
  }

  getFirstActiveFoundMaybe() {
    const { menuDescriptors } = this.props;

    const activeMaybe = menuDescriptors
      .find((menuDescriptor) => {
        const hasChildren = menuDescriptor.children;
        return (
          menuDescriptor.isActive === true ||
          (hasChildren && menuDescriptor.children
            .find(child => child.isActive)
          )
        );
      });

    if (activeMaybe && activeMaybe.key) {
      return activeMaybe.key;
    }
    return null;
  }

  getSelected(key) {
    const { selected } = this.state;

    return (selected === key);
  }

  changeSelected(value) {
    this.setState({
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
      logoDescriptor,
      attachToViewport,
      style,
      breakpoint,
      menuWidth,
      bigMenuWidth,
      innerStyle,
      fullViewportWidthPanel: fullViewportWidthPanelProp,
      panelOffsetTop,
      panelOffsetBottom,
    } = this.props;

    const fullViewportWidthPanel = attachToViewport ? true : fullViewportWidthPanelProp;

    const {
      selected,
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
            ...menuDescriptorProps
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

    const theLogo = logoDescriptor && (
      <GlobalMenuLogo

        key={logoDescriptor.key || 'GlobalMenuMainLogo'}
        label={(logoDescriptor.displayName || '')}
        icon={logoDescriptor.icon}
        Link={logoDescriptor.Link}
        to={logoDescriptor.to}
        href={logoDescriptor.href}
        logoTooltipLabel={logoDescriptor.tooltipLabel || logoDescriptor.displayName || ''}
        selectedKey={selected}
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
            breakpoint={breakpoint}
            menuWidth={menuWidth}
            bigMenuWidth={bigMenuWidth}
            panelOffsetTop={panelOffsetTop}
            panelOffsetBottom={panelOffsetBottom}
            logo={theLogo}
            onLogoClick={onLogoClick}
            selectedKey={selected}
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
  // initialActive: PropTypes.string,
  initialSelected: PropTypes.string,
  onLogoClick: PropTypes.func,
  // backgroundColor: PropTypes.string,
  // Logo: PropTypes.any,
  // primaryColor: PropTypes.string,
  menuDescriptors: PropTypes.array,
  style: PropTypes.object,
  panelOffsetTop: PropTypes.string,
  panelOffsetBottom: PropTypes.string,
};

GlobalMenu.defaultProps = {
  // initialActive: '',
  initialSelected: undefined,
  onLogoClick: () => { },
  // backgroundColor: '',
  // Logo: PropTypes.any,
  // primaryColor: '',
  menuDescriptors: [],
  style: PropTypes.object,
  panelOffsetTop: '0px',
  panelOffsetBottom: '0px',
};

export default GlobalMenu;
