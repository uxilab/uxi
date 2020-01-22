import styled from 'styled-components';

const Tr = styled.tr`
  border-bottom: 1px solid hsla(0, 0%, 92%, 1);
  &:nth-child(2n) {
    background: hsla(0, 0%, 99%, 1);
  }
`;

export default Tr;
