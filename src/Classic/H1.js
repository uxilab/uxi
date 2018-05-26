import styled from 'styled-components';

const H1 = styled.h1`
  font-size: ${({ theme: { fontSizes } }) => fontSizes.h1};
  font-weight: bold;
  margin: ${({ theme: { spacing } }) => spacing.m} 0px;
  color: ${({ theme: { fontColors }}) => fontColors.title };
`;

export default H1;
