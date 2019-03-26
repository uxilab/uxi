import styled from 'styled-components';
import { flexStylesCSSString } from './flexStyles';

// TODO: would using flexbasis allow for auto transitionalbe layout ?
export const Flex = styled.div`
  ${flexStylesCSSString};
  flex-direction: ${({ direction }) => (direction || 'row')};
`;

export default Flex;
