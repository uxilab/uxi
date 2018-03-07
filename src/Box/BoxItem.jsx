import React from 'react';
import ComponentWithPadding from '../Base/DivPadding';

const BoxItemStyle = {
  borderBottom: '1px solid #ccc',
};

class BoxItem extends ComponentWithPadding {
  render() {
    const { children, isLast } = this.props;

    return (
      <div style={{ ...this.getStyle(isLast ? {} : BoxItemStyle), width: '100%' }} >
        {children}
      </div>
    );
  }
}

export default BoxItem;
