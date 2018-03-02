import React from 'react';
import styled from 'styled-components';

const CardUI = styled.div`
  border-radius: 3px;
  overflow: hidden;
  box-shadow: 0 1px 6px 1px rgba(35, 35, 35, .2);
  border: 1px solid #cecece;
`;

const Card = ({ children }) => (
  <CardUI> {children} </CardUI>
);

Card.displayName = 'Card';

export default Card;
