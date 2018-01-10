import styled from 'styled-components';

const H6 = styled.h6`
  ${({ theme: { sc } }) => sc.title}
  ${({ theme: { sc } }) => sc.h6}
`;

export default H6;
