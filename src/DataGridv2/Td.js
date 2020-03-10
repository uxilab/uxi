// @flow
import styled from 'styled-components';
import React from 'react';
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
  shouldComponentUpdate(/* nextProps, nextState */) {
    const {
      isBeingResized,
    } = this.props;

    if (isBeingResized) {
      return true;
    }

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
