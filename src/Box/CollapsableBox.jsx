import React, { Component } from 'react';
import CollapsableBoxStyle from './CollapsableBox.style';
import Text from '../Text';
import Icon from '../Icons';
import IconButton from '../Button/IconButton';
import ThemeComponent from '../base/ThemeComponent';

class CollapsableBox extends ThemeComponent {
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

  render() {
    const {
      children,
      title,
    } = this.props;

    const expandIcon = this.state.isOpen
      ? (<IconButton color={this.context.theme.palette.accent.main} size="S" icon="Arrowdown" />)
      : (<IconButton color={this.context.theme.palette.accent.main} size="S" icon="Arrowup" />);

    const header = (
      <ul role="menu" style={CollapsableBoxStyle.header} onClick={() => { this.toggle(); }}>
        <div style={{ flex: 1 }}>
          <Text type="heading">{title}</Text>
        </div>
        <div style={{ textAlign: 'right' }}>
          {expandIcon}
        </div>
      </ul>
    );

    let containerStyle = CollapsableBoxStyle.container;

    if (!this.state.isOpen) {
      containerStyle = { ...containerStyle, maxHeight: 0 };
    }

    return (
      <div style={CollapsableBoxStyle.wrapper}>
        {header}
        <div style={containerStyle}>
          {children}
        </div>
      </div>
    );
  }
}

export default CollapsableBox;
