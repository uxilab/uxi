/* @flow */
import React, { Component } from 'react';
import radium from 'radium';
// import Ripples from '../Motion/Ripples';
// import Icon from '../Icons';
import getAppropriateIcon from '../Icons/getAppropriateIcon';

/* eslint-disable react/prefer-stateless-function */
class IconButton extends Component {
  render() {
    const {
      onClick,
      link,
      disabled,
      icon,
      children,
      style,
    } = this.props;

    let finalIcon;

    if (typeof icon === 'string') {
      const Icon = getAppropriateIcon(icon);
      finalIcon = <Icon {...this.props} />;
    } else if (React.isValidElement(icon)) {
      finalIcon = icon;
    } else {
      const Icon = icon;
      finalIcon = <Icon {...this.props} />;
    }

    if (link) {
      return (<a href={link} style={style}>
        {finalIcon}
      </a>);
    }

    return (
      <button style={{ border: 0, padding: 0, verticalAlign: 'middle', cursor: 'pointer', background: 'transparent', ...style }} onClick={onClick}>
        {finalIcon}
        {children}
      </button>
    );
  }
}

export default radium(IconButton);
