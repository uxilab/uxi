/* @flow */
import React, { Component } from 'react';
import radium from 'radium';
// import Ripples from '../Motion/Ripples';
import Icon from '../Icons';
import getAppropriateIcon from '../Icons/getAppropriateIcon';

class IconButton extends Component {
  render() {
    const {
      onClick,
      link,
      disabled,
      icon,
    } = this.props;

    const Icon = getAppropriateIcon(icon);

    if (link) {
      <a href={link}>
        <Icon {...this.props} />
      </a>;
    }

    return (
      <button style={{ border: 0, padding: 0, verticalAlign: 'middle', cursor: 'pointer', background: 'transparent' }} onClick={onClick}>
        <Icon {...this.props} />
      </button>
    );
  }
}

export default radium(IconButton);
