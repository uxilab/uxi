import styled from 'styled-components';

const H3 = styled.h3`
  ${({ theme: { sc } }) => sc.title}
  ${({ theme: { sc } }) => sc.h3}
`;

export default H3;
