import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// let count = 0;
// const getKey = () => count++;

const ListWrapper = styled.div`
  margin: 0;
  padding: 0;
  list-style: none;
  li {
    display: ${({ type }) => (type === 'vertical' ? 'block' : 'inline-block')};
    padding-left: ${({ type }) => (type === 'vertical' ? '0' : '12px')};
    padding-top: ${({ type }) => (type === 'vertical' ? '6px' : '0')};
    padding-bottom: ${({ type }) => (type === 'vertical' ? '6px' : '0')};
    &:first-child {
      padding-left:0;
    }
  }
`;

/**
 *  This compo is just a "repeater" it has not styling option
 *  it "just maps stuff" and render in provided compo and DO NOT wraps it
 */
const List = ({ style, children, type }) => {
  if (React.Children.count(children) <= 0) {
    return null;
  }
  const wrappedChildren = React.Children.map(children, (c, i) => {
    const key = c.key ? `key-${c.key || c.name || c.label}` : `index-${i}`;
    return (
      <li key={key}>
        {c}
      </li>
    );
  });


  return (<ListWrapper style={style} type={type}>{wrappedChildren}</ListWrapper>);
};

List.propTypes = {
  children: [PropTypes.node],
};

List.defaultProps = {
  children: [],
};

export default List;
