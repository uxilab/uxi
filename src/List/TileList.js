import React from 'react';
import styled from 'styled-components';

const CardListWrapper = styled.div`
  .uxi-tile-detail {
    border-top:0;
  }
  .uxi-tile-detail:first-child {
    border-top:1px solid #ccc;
  }
`;

const CardList = ({ children }) => (
  <CardListWrapper>
    {children}
  </CardListWrapper>
);

export default CardList;
