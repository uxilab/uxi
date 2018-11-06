import React, { Component } from 'react';
import styled from 'styled-components';
import WidgetHeader from './WidgetHeader';
import { Loader } from '../Motion';

const WidgetWrapper = styled.div`
  border: 1px solid #ececec;
  box-sizing: border-box;
`;

const WidgetContainer = styled.div`
  min-height: 150px;

  height: ${({ fixedHeight }) => (fixedHeight ? `${fixedHeight}px` : 'none')};
  ${({ fixedHeight }) => (fixedHeight ? 'overflow-y: auto' : '')};
`;

const LoaderWrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const EmptyWrapper = styled.div`
  width: 100%;
  height: 100%;
  background: rgb(241, 241, 240);
  display: flex;
  align-items: center;
  justify-content: center;
  min-height:80px;
`;

// empty
// SubHeader
class Widget extends Component {
  static componentName = 'Widget';

  createFixedHeightDataGrid(table) {
    const { fixedHeight } = this.props;

    return React.cloneElement(
      table,
      {
        fixedHeight,
        height: fixedHeight,
      },
    );
  }

  render() {
    const {
      children,
      title,
      isLoading,
      isLoadingMore,
      menu,
      emptyText,
      fixedHeight,
      style: styleProp,
    } = this.props;

    let content;
    let hasFixedHeight = fixedHeight;

    if (!isLoading && !emptyText && children && hasFixedHeight) {
      React.Children.forEach(children, (child) => {
        if (!React.isValidElement(child)) return;

        const { componentName } = child.type;
        if (componentName === 'Table') {
          content = this.createFixedHeightDataGrid(child);
          hasFixedHeight = false;// reset and pass on to GRID;
        } else if (componentName === 'DataGrid') {
          content = this.createFixedHeightDataGrid(child);
          hasFixedHeight = false;// reset and pass on to GRID;
        } else {
          content = children;
        }
      });
    } else {
      content = children;
    }

    return (
      <WidgetWrapper style={styleProp}>
        {
          title &&
          (
            <WidgetHeader
              title={title}
              isLoading={isLoadingMore}
              menu={menu}
            />
          )
        }
        <WidgetContainer fixedHeight={hasFixedHeight ? fixedHeight : ''}>
          { !isLoading && !emptyText && content}
          { isLoading && <LoaderWrapper><Loader /></LoaderWrapper>}
          { !isLoading && emptyText && <EmptyWrapper>{emptyText}</EmptyWrapper>}
        </WidgetContainer>
      </WidgetWrapper>
    );
  }
}

export default Widget;
