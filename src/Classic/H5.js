import styled from 'styled-components';

const H5 = styled.h5`
  font-size: ${({ theme: { fontSizes } }) => fontSizes.h5};
  font-weight: bold;
  margin: ${({ theme: { spacing } }) => spacing.m} 0px;
  color: ${({ theme: { fontColors }}) => fontColors.title };
`;

export default H5;
