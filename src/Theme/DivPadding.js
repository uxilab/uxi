import React from 'react';
import ComponentWithPadding from './ComponentWithPadding';

class DivPadding extends ComponentWithPadding {
  render() {
    const { className, children } = this.props;

    return (
      <div className={className} style={this.getStyle()}>
        {children}
      </div>
    );
  }
}

export default DivPadding;
