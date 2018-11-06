import styled from 'styled-components';

const H2 = styled.h2`
  ${({ theme: { sc } }) => sc.title}
  ${({ theme: { sc } }) => sc.h2}
`;

export default H2;
