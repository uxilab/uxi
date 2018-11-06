/* @flow */
import React, { Component } from 'react';
import { getAppropriateIcon } from '../Icons/getAppropriateIcon';

/* eslint-disable react/prefer-stateless-function */
class IconButton extends Component {
  render() {
    const {
      onClick,
      link,
      // disabled,
      icon,
      children,
      style,
      rel,
      target,
      href,
    } = this.props;

    // white list link prop (attributes):
    const linkPropsAttr = {
      rel,
      target,
      href,
    };

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

    if (link || href) {
      return (
        <a href={link} style={style} {...linkPropsAttr} >
          {finalIcon}
        </a>
      );
    }

    const finalStyles = {
      border: 0,
      padding: 0,
      verticalAlign: 'middle',
      cursor: 'pointer',
      background: 'transparent',
      ...style,
    };

    return (
      <button style={finalStyles} onClick={onClick}>
        {finalIcon}
        {children}
      </button>
    );
  }
}

IconButton.defaultProps = {
  rel: null,
  target: null,
  href: null,
};

export default IconButton;
