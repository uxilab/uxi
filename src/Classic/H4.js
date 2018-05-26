import styled from 'styled-components';

const H4 = styled.h4`
  font-size: ${({ theme: { fontSizes } }) => fontSizes.h4};
  font-weight: bold;
  margin: ${({ theme: { spacing } }) => spacing.m} 0px;
  color: ${({ theme: { fontColors }}) => fontColors.title };
`;

export default H4;
