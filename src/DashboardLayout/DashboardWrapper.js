import React, { Component } from 'react';
import styled from 'styled-components';
import ReactDom from 'react-dom';
/*
  Credit for inspiration: https://medium.com/@andybarefoot/a-masonry-style-layout-using-css-grid-8c663d355ebb
*/

const DashboardWrapperDiv = styled.div`
  display: grid;
  grid-template-columns: repeat(8, minmax(120px, 1fr));
  grid-auto-rows: 180px;
  grid-gap:24px;
  @media (max-width: 960px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

class DashboardWrapper extends Component {
  componentDidMount() {
    // this.resizeAllGridItems();
    window.addEventListener('resize', this.resizeAllGridItems);
  }

  resizeAllGridItems() {
    const allItems = document.getElementsByClassName('item');
    [...allItems].forEach((x) => {
      this.resizeGridItem(x);
    });
  }

  resizeGridItem(item) {
    const grid = ReactDom.findDOMNode(this.grid);
    const rowHeight = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-auto-rows'), 10);
    const rowGap = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-row-gap'), 10);
    const rowSpan = Math.ceil((item.querySelector('.content').getBoundingClientRect().height + rowGap) / (rowHeight + rowGap));
    item.style.gridRowEnd = `span ${rowSpan}`;
  }

  render() {
    const { children } = this.props;
    return (
      <DashboardWrapperDiv ref={(grid) => { this.grid = grid; }}>
        {children}
      </DashboardWrapperDiv>
    );
  }
}


export default DashboardWrapper;
