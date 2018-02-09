import styled from 'styled-components';

export const Flex = styled.div`
  background: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: ${({ direction }) => (direction || 'row')};
`;

export default Flex;
