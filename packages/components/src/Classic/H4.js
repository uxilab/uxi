import styled from 'styled-components';

const H4 = styled.h4`
  ${({ theme: { sc } }) => sc.title}
  ${({ theme: { sc } }) => sc.h4}
`;

export default H4;
