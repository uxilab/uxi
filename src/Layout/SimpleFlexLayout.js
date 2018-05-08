import React from 'react';
import styled from 'styled-components';

const SimpleFlexLayoutWrapper = styled.div`
  display:flex;
  flex-wrap: wrap;
  @media (min-width: ${({ tabletBreakPoint }) => tabletBreakPoint}) {
    justify-content: space-between;
  }
`;

const SimpleFlexLayoutItem = styled.div`
  position: relative;
  box-sizing:border-box;
  width: ${({ mobileWidth }) => (mobileWidth)}%;
  margin-bottom: ${({ gutterInt }) => `${gutterInt}px;`}};
  margin-bottom: ${({ gutterInt }) => `${gutterInt * 1.15}px;`}};
  min-height: ${({ itemMinHeight }) => itemMinHeight};

  @media screen and (min-width: ${({ tabletBreakPoint }) => tabletBreakPoint}) {
    width: ${({ tabletColumnWidth }) => (tabletColumnWidth)}%;
    width: ${({ tabletColumnWidth, gutterTabletInt }) => `calc(${tabletColumnWidth}% - ${gutterTabletInt}px);`};
    margin-bottom: ${({ gutterInt }) => `${gutterInt}px;`}};
    min-height: ${({ itemTabletMinHeight }) => itemTabletMinHeight};
  }
  @media screen and (min-width: ${({ desktopBreakPoint }) => desktopBreakPoint}) {
    width: ${({ desktopWidth }) => (desktopWidth)}%;
    width: ${({ desktopWidth, gutterDesktopInt }) => `calc(${desktopWidth}% - ${gutterDesktopInt}px);`};
    min-height: ${({ itemDesktopMinHeight }) => itemDesktopMinHeight};
  }
`;

const SimpleFlexLayout = ({
  columnNumber = 1,
  children = [],
  desktopColumnNumber,
  tabletColumnNumber,
  gutter = '0',
  style,
  tabletBreakPoint,
  desktopBreakPoint,
  itemMinHeight,
  itemTabletMinHeight,
  itemDesktopMinHeight,
  itemStyle,
}) => {
  const simplayLayoutContent = [];

  const desktopWidth = Math.round((1 / (desktopColumnNumber || columnNumber)) * 10000) / 100;
  const mobileWidth = Math.round((1 / columnNumber) * 10000) / 100;
  const tabletColumnWidth = Math.round((1 / (tabletColumnNumber || columnNumber)) * 10000) / 100;
  const gutterInt = parseInt(gutter, 10);
  const gutterTabletInt = (parseInt(gutter, 10) * (tabletColumnNumber - 1)) / tabletColumnNumber;
  const gutterDesktopInt = (parseInt(gutter, 10) * (desktopColumnNumber - 1)) / desktopColumnNumber;

  React.Children.forEach(children, (child, index) => {
    if (!React.isValidElement(child)) return;

    simplayLayoutContent.push(
      <SimpleFlexLayoutItem
        key={`simpleLayout-row-${index}`}
        desktopWidth={desktopWidth}
        mobileWidth={mobileWidth}
        tabletColumnWidth={tabletColumnWidth}
        className="uxi-simple-flex-layout-col"
        gutter={gutter}
        gutterInt={gutterInt}
        gutterTabletInt={gutterTabletInt}
        gutterDesktopInt={gutterDesktopInt}
        tabletBreakPoint={tabletBreakPoint}
        desktopBreakPoint={desktopBreakPoint}
        columnNumber={columnNumber}
        tabletColumnNumber={tabletColumnNumber}
        desktopColumnNumber={desktopColumnNumber}
        itemMinHeight={itemMinHeight}
        itemTabletMinHeight={itemTabletMinHeight}
        itemDesktopMinHeight={itemDesktopMinHeight}
        style={itemStyle}
      >
        {child}
      </SimpleFlexLayoutItem>,
    );
  });

  return (
    <SimpleFlexLayoutWrapper
      style={style}
      className="uxi-simple-flex-layout"
      tabletBreakPoint={tabletBreakPoint}
      desktopBreakPoint={desktopBreakPoint}
    >
      {simplayLayoutContent}
    </SimpleFlexLayoutWrapper>
  );
};

SimpleFlexLayout.defaultProps = {
  tabletBreakPoint: '768px',
  desktopBreakPoint: '992px',
  gutter: '0',
  columnNumber: 1,
  tabletColumnNumber: 1,
  desktopColumnNumber: 1,
  itemMinHeight: '1px',
  itemTabletMinHeight: '1px',
  itemDesktopMinHeight: '1px',

};

export default SimpleFlexLayout;
