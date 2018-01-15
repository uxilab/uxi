import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TypeProvider extends Component {
  static childContextTypes = {
    getTypeDefinition: PropTypes.func,
  };

  getChildContext() {
    return {
      getTypeDefinition: this.getTypeDefinition.bind(this),
    };
  }

  getTypeDefinition(value) {
    const { types } = this.props;
    const converter = (types || []).find(t => typeof value === t.type);
    if (!converter) {
      return;
    }
    return converter.Component;
  }

  render() {
    const { children } = this.props;
    return (
      <div>
        {children}
      </div>
    );
  }
}

export default TypeProvider;
