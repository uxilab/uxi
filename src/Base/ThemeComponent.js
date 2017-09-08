import React, { Component, PropTypes } from 'react';

class ThemeComponent extends Component {
  getSubStylePseudoElement(name, subStyleName, pseudoElementName) {
    const theme = this.context.theme;
    const result = {};

    result[`:${pseudoElementName}`] = theme[`${name}:${subStyleName}:${pseudoElementName}`] || {};

    return result;
  }

  getPseudoElement(name, pseudoElement) {
    const theme = this.context.theme;
    const result = {};
    const pseudoElementStyle = theme[`${name}:${pseudoElement}`] || {};

    result[`:${pseudoElement}`] = pseudoElementStyle;

    return result;
  }

  getSubStyle(name, subStyleName, stylesFromComponent = {}) {
    const theme = this.context.theme;
    const themeForComponent = theme[`${name}:${subStyleName}`] || {};

    return Object.assign({}, themeForComponent, stylesFromComponent);
  }

  getStyle(name, stylesFromComponent = {}) {
    const { style } = this.props;
    const theme = this.context.theme;
    const themeForComponent = theme[name] || {};

    return Object.assign({}, (style || {}), themeForComponent, stylesFromComponent);
  }
}

ThemeComponent.propTypes = {
  style: PropTypes.object,
};

export default ThemeComponent;
