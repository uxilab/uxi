import React from 'react';
import styled from 'styled-components';

const SimpleFlexLayoutWrapper = styled.div`
  display:flex;
  flex-wrap: wrap;
`;

const SimpleFlexLayoutItem = styled.div`
  box-sizing:border-box;
  padding: ${({ gutter }) => (gutter)};
  width: ${({ mobileWidth }) => (mobileWidth)}%;
  @media screen and (min-width: 768px) {  
    width: ${({ tableColumnWidth }) => (tableColumnWidth)}%;
  }
  @media screen and (min-width: 992px) {
    width: ${({ desktopWidth }) => (desktopWidth)}%;
  }
`;

const SimpleFlexLayout = ({
  columnNumber = 1,
  children = [],
  desktopColumnNumber,
  tabletColumnNumber,
  gutter = '0',
  style,
}) => {
  const simplayLayoutContent = [];

  const desktopWidth = Math.round((1 / (desktopColumnNumber || columnNumber)) * 10000) / 100;
  const mobileWidth = Math.round((1 / columnNumber) * 10000) / 100;
  const tableColumnWidth = Math.round((1 / (tabletColumnNumber || columnNumber)) * 10000) / 100;

  React.Children.forEach(children, (child, index) => {
    if (!React.isValidElement(child)) return;

    simplayLayoutContent.push(
      <SimpleFlexLayoutItem
        key={`simpleLayout-row-${index}`}
        desktopWidth={desktopWidth}
        mobileWidth={mobileWidth}
        tableColumnWidth={tableColumnWidth}
        className="uxi-simple-flex-layout-col"
        gutter={gutter}
      >
        {child}
      </SimpleFlexLayoutItem>,
    );
  });

  return (
    <SimpleFlexLayoutWrapper style={style} className="uxi-simple-flex-layout">
      {simplayLayoutContent}
    </SimpleFlexLayoutWrapper>
  );
};

export default SimpleFlexLayout;
