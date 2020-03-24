// @flow
import styled from 'styled-components';
import React from 'react';
import isEqual from 'lodash/isEqual';

const cellHeight = 48;

const TdUI = styled.td.attrs(props => ({
  ...props,
}))`
  box-sizing: border-box;
  height: ${cellHeight}px;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
`;


class Td extends React.Component {
  // shouldComponentUpdate(nextProps ) {
  //   const {
  //     isBeingResized,
  //     columnSize,
  //     columns = [],
  //     mComp,
  //   } = this.props;
  //   const {
  //     columnSize: nextColumnSize,
  //     mComp: nextmComp,
  //     columns: nextColumns = [],
  //   } = nextProps;

  //   if (
  //     columns.filter((x = {}) => !x.hide).length !== nextColumns.filter((x = {}) => !x.hide).length
  //   ) {
  //     return true;
  //   }

  //   /** Columns size can change on user input (dnd col resize)
  //    * but also on mount,
  //    * depending on props an available space
  //    */

  //   if (columnSize !== nextColumnSize) {
  //     return true;
  //   }

  //   if (isBeingResized) {
  //     return true;
  //   }

  //   if (nextmComp && mComp && !isEqual(nextmComp.props, mComp.props)) {
  //     return true;
  //   }

  //   return false;
  // }

  render() {
    return (
      <TdUI {...this.props} />
    );
  }
}

Td.displayName = 'Td';

export default Td;
