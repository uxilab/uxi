import styled from 'styled-components';

const H2 = styled.h2`
  font-size: ${({ theme: { fontSizes } }) => fontSizes.h2};
  font-weight: bold;
  margin: ${({ theme: { spacing } }) => spacing.m} 0px;
  color: ${({ theme: { fontColors }}) => fontColors.title };
`;

export default H2;
