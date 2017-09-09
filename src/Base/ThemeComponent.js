import React, { Component, PropTypes } from 'react';

type Props = {
  style: Object,
};

class ThemeComponent extends Component<Props> {
  getSubStylePseudoElement(name: string, subStyleName: string, pseudoElementName: string) {
    const theme = this.context.theme;
    const result = {};

    result[`:${pseudoElementName}`] = theme[`${name}:${subStyleName}:${pseudoElementName}`] || {};

    return result;
  }

  getPseudoElement(name: string, pseudoElement: string) {
    const theme = this.context.theme;
    const result = {};
    const pseudoElementStyle = theme[`${name}:${pseudoElement}`] || {};

    result[`:${pseudoElement}`] = pseudoElementStyle;

    return result;
  }

  getSubStyle(name: string, subStyleName: string, stylesFromComponent: Object = {}) {
    const theme = this.context.theme;
    const themeForComponent = theme[`${name}:${subStyleName}`] || {};

    return Object.assign({}, themeForComponent, stylesFromComponent);
  }

  getStyle(name: string, stylesFromComponent: Object = {}) {
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
