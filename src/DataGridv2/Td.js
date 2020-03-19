// @flow
import styled from 'styled-components';
import React from 'react';
import isEqual from 'lodash/isEqual';
// import PropTypes from 'prop-types';

const cellHeight = 48;

const TdUI = styled.td.attrs(props => ({
  ...props,
  // children: <TdInnerWrapper>{props.children}</TdInnerWrapper>,
}))`
  box-sizing: border-box;
  height: ${cellHeight}px;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  /* padding: 8px; */
`;

// type TdProps = {
// }

class Td extends React.Component {
  shouldComponentUpdate(nextProps /* , nextState */) {
    const {
      isBeingResized,
      columnSize,
      columns = [],
      // columnOrder,
      mComp,
      // Component,
      // allowInlinePropertySelection,
    } = this.props;
    const {
      columnSize: nextColumnSize,
      // columnOrder: nextColumnsOrder,
      mComp: nextmComp,
      columns: nextColumns = [],
      // Component: nextComponent,
    } = nextProps;

    // if (!allowInlinePropertySelection) {
    //   return true
    // }

    if (
      columns.filter((x = {}) => x.show).length !== nextColumns.filter((x = {}) => x.show).length
    ) {
      return true;
    }

    /** Columns size can change on user input (dnd col resize)
     * but also on mount,
     * depending on props an available space
     */

    if (columnSize !== nextColumnSize) {
      return true;
    }

    if (isBeingResized) {
      return true;
    }
    // console.log('–––––––––––––––––');
    // console.log('Component', Component);
    // console.log('nextComponent', nextComponent);
    // console.log('–––––––––––––––––');
    // console.log('mComp', mComp);
    // console.log('nextmComp', nextmComp);
    // console.log('–––––––––––––––––');
    if (nextmComp && mComp && !isEqual(nextmComp.props, mComp.props)) {
      return true;
    }

    // if (!isEqual(columnOrder, nextColumnsOrder)) {
    //   return true;
    // }

    return false;
  }

  render() {
    return (
      <TdUI {...this.props} />
    );
  }
}

// const Td = (props: TdProps) => <TdUI {...props} />;

Td.displayName = 'Td';

export default Td;
