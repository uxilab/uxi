import React, { Component, PropTypes } from 'react';

class Page extends Component {
  render() {
    const { children, isContained, style = {} } = this.props;
    const isContainedResult = isContained ? true : this.context.isFixedWidth();

    if (isContainedResult) {
      return (
        <div className="uxi_container">
          <div style={Object.assign(style, { display: 'flex' })}>
            <div style={{ flex: 1 }}>
              {children}
            </div>
          </div>
        </div>
      );
    }
    return (
      <div style={Object.assign(style, { display: 'flex' })}>
        <div style={{ flex: 1 }}>
          {children}
        </div>
      </div>
    );
  }
}

Page.contextTypes = {
  isFixedWidth: PropTypes.func,
};


export default Page;
