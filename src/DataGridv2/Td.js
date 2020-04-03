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


// eslint-disable-next-line react/prefer-stateless-function
class Td extends React.Component {
  /*
  shouldComponentUpdate(nextProps) {
    const {
      isBeingResized,
      isResizing,
      columnSize,
      columns = [],
      mComp,
      selected = [],
    } = this.props;
    const {
      isResizing: willBeResizing,
      columnSize: nextColumnSize,
      mComp: nextmComp,
      columns: nextColumns = [],
      selected: nextSelected = [],
    } = nextProps;

    if (isResizing && !willBeResizing) {
      return true;
    }

    if (selected.join(',') !== nextSelected.join(',')) {
      return true;
    }

    const curr = columns.filter(x => !x.hide).map(({ property = '' } = {}) => property);
    const next = nextColumns.filter(x => !x.hide).map(({ property = '' } = {}) => property);
    if (curr.join(',') !== next.join(',')) {
      return true;
    }

    // Columns size can change on user input (dnd col resize)
    // but also on mount,
    // depending on props an available space
    //

    if (columnSize !== nextColumnSize) {
      return true;
    }

    if (isBeingResized) {
      return true;
    }

    // if consumer changes props under ouor feet in its Component
    // altho, should we do this here and not higher up in the tree ?
    // e.g. is consumer changes anytihng in what is passed, let's rerender the entore datGRid
    if (nextmComp && mComp && !isEqual(nextmComp.props, mComp.props)) {
      return true;
    }

    return false;
  }
  */

  render() {
    return (
      <TdUI {...this.props} />
    );
  }
}

Td.displayName = 'Td';

export default Td;
