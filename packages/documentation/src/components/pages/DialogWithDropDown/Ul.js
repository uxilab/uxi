
import React from 'react';
import styled from 'styled-components';

const Ul = styled.ul`
  li {
    display: inline;
    padding: 0 8px 0 0;
  }
`;

const List = ({ children }) => (
  <Ul>
    {
      React.Children.map(children, child => (
        <li> {child} </li>
      ))
    }
  </Ul>
);

export default List;
