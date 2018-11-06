import React, { Component } from 'react';
import styled from 'styled-components';

const DashboardItemDiv = styled.div`
  grid-row-end: ${({ size }) => (`span ${size}`)};
  grid-column-end: ${({ gridWidth }) => (`span ${gridWidth}`)};
  .content {
    height: 100%;
    width: 100%;
    box-sizing:border-box;
  }
`;

class DashboardItem extends Component {
  createFixedHeightWidget(table) {
    const { gridHeight } = this.props;

    return React.cloneElement(
      table,
      {
        fixedHeight: ((gridHeight * 180) - (table.props.title ? 50 : 0)),
      },
    );
  }

  render() {
    const {
      children,
      gridHeight = 1,
      gridWidth = 1,
    } = this.props;
    let content = <div />;

    if (children) {
      React.Children.forEach(children, (child) => {
        if (!React.isValidElement(child)) return;

        const { componentName } = child.type;

        if (componentName === 'Widget') {
          content = this.createFixedHeightWidget(child);
        } else {
          content = child;
        }
      });
    } else {
      content = children;
    }

    return (
      <DashboardItemDiv className="item" gridWidth={gridWidth} size={gridHeight}>
        <div className="content">
          {content}
        </div>
      </DashboardItemDiv>
    );
  }
}

export default DashboardItem;
