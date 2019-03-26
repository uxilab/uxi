import styled from 'styled-components';
import { flexRightColStylesCSSString } from './flexStyles';

// TODO: would using flexbasis allow for auto transitionalbe layout ?
const FlexRightCol = styled.div`
  ${flexRightColStylesCSSString};
`;

FlexRightCol.displayName = 'FlexRightCol';

export default FlexRightCol;
