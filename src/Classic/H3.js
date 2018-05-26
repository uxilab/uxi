import styled from 'styled-components';

const H3 = styled.h3`
  font-size: ${({ theme: { fontSizes } }) => fontSizes.h3};
  font-weight: bold;
  margin: ${({ theme: { spacing } }) => spacing.m} 0px;
  color: ${({ theme: { fontColors }}) => fontColors.title };
`;

export default H3;
