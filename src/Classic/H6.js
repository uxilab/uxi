import styled from 'styled-components';

const H6 = styled.h6`
  font-size: ${({ theme: { fontSizes } }) => fontSizes.h6};
  font-weight: bold;
  margin: ${({ theme: { spacing } }) => spacing.m} 0px;
  color: ${({ theme: { fontColors }}) => fontColors.title };
`;

export default H6;
