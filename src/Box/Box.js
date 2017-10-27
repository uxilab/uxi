import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { theme } from '../Theme';
import IsDarkComponent from '../Base/IsDarkComponent';

class Box extends IsDarkComponent {
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
      this.getPadding(),
      this.getMargin(),
      stylesFromComponent,
    );
  }

  render() {
    const { hasBorder, children, isDark, style } = this.props;
    const borderStyle = hasBorder ? {
      border: theme.border.default,
      borderRadius: '2px',
      background: isDark ? theme.background.dark : theme.background.light,
    } : {};

    return (
      <div style={{ ...this.getStyle(borderStyle), ...style }}>
        {children}
      </div>
    );
  }
}

Box.propTypes = {
  margin: PropTypes.oneOf(['xs', 's', 'm', 'l', 'XS', 'S', 'M', 'L']),
  padding: PropTypes.oneOf(['xs', 's', 'm', 'l', 'XS', 'S', 'M', 'L']),
  style: PropTypes.object,
};

export default Box;
