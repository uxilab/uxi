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
    } = this.props;

    let Icon;

    if (typeof icon === 'string') {
      Icon = getAppropriateIcon(icon);
    } else {
      Icon = icon;
    }

    if (link) {
      return (<a href={link}>
        <Icon {...this.props} />
      </a>);
    }

    return (
      <button style={{ border: 0, padding: 0, verticalAlign: 'middle', cursor: 'pointer', background: 'transparent' }} onClick={onClick}>
        <Icon {...this.props} />
        {children}
      </button>
    );
  }
}

export default radium(IconButton);
