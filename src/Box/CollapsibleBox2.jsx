import React from 'react';
import CollapsibleBoxStyle from './CollapsibleBox.style';
import Box from './Box';
import Text from '../Text';
import IconButton from '../Button/IconButton';
import ThemeComponent from '../Base/ThemeComponent';
import DropDown from '../internal/DropDown'

class CollapsibleBox2 extends ThemeComponent {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: props.isOpen,
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }

  getMargin() {
    const { margin } = this.props;

    if (!margin) {
      return {};
    }

    if (margin.toLowerCase() === 'xs') {
      return {
        margin: '5px',
      };
    }

    if (margin.toLowerCase() === 's') {
      return {
        margin: '15px',
      };
    }

    if (margin.toLowerCase() === 'm') {
      return {
        margin: '30px',
      };
    }

    if (margin.toLowerCase() === 'l') {
      return {
        margin: '60px',
      };
    }

    return {};
  }

  getPadding() {
    const { padding } = this.props;

    if (!padding) {
      return {};
    }

    if (padding.toLowerCase() === 'xs') {
      return {
        padding: '5px',
      };
    }

    if (padding.toLowerCase() === 's') {
      return {
        padding: '15px',
      };
    }

    if (padding.toLowerCase() === 'm') {
      return {
        padding: '30px',
      };
    }

    if (padding.toLowerCase() === 'l') {
      return {
        padding: '60px',
      };
    }

    return {};
  }

  getStyle(stylesFromComponent = {}) {
    const { style } = this.props;

    return Object.assign(
      {}, (style || {}),
      CollapsibleBoxStyle.wrapper,
      this.getPadding(),
      this.getMargin(),
      stylesFromComponent,
    );
  }

  render() {
    const {
      children,
      title,
    } = this.props;

    const expandIcon = this.state.isOpen
      ? (<IconButton style={{ width: '14px' }} color={this.context.uxiTheme.palette.accent.main} size="S" icon="Arrowdown" />)
      : (<IconButton style={{ width: '14px' }} color={this.context.uxiTheme.palette.accent.main} size="S" icon="Arrowup" />);

    const header = (
      <div role="menu" style={CollapsibleBoxStyle.header} onClick={() => { this.toggle(); }}>
        <div style={{ flex: 1 }}>
          <Text type="heading">{title}</Text>
        </div>
        <div style={{ textAlign: 'right' }}>
          {expandIcon}
        </div>
      </div>
    );

    let containerStyle = CollapsibleBoxStyle.container;

    if (!this.state.isOpen) {
      containerStyle = { ...containerStyle, maxHeight: 0 };
    }

    return (
      <DropDown
        style={{ display: 'inline-block', width: '100%' }}
        main={header}
        items={children}
      />
    );

    return (
      // <div style={CollapsibleBoxStyle.wrapper}>
      <div style={this.getStyle()} >
        {header}
        <div style={containerStyle}>
          {children}
        </div>
      </div>
    );
  }
}

export default CollapsibleBox2;
