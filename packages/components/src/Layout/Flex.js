import styled from 'styled-components';

// TODO: would using flexbasis allow for auto transitionalbe layout ?
export const Flex = styled.div`
  background: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: ${({ direction }) => (direction || 'row')};
`;

export default Flex;
