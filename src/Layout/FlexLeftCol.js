import styled from 'styled-components';
import { flexLeftColStylesCSSString } from './flexLeftColStyles';

// TODO: would using flexbasis allow for auto transitionalbe layout ?
const FlexLeftCol = styled.div`
  ${flexLeftColStylesCSSString};
`;

FlexLeftCol.displayName = 'FlexLeftCol';

export default FlexLeftCol;
