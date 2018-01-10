import styled from 'styled-components';

/*
  const H1 = styled.h1`
  color: ${({ theme: { sc } }) => sc.titleColor}
    font-size: ${({ theme: { sc } }) => sc.titleFontSize}
  `;
*/
const H1 = styled.h1`
  ${({ theme: { sc } }) => sc.title}
`;

export default H1;
