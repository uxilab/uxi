import styled, { css } from 'styled-components';
import { flexCSSString } from './Flex';

export const flexLeftColCSSString = css`
  & > *:first-child {
    flex-grow: 0;
    flex-shrink: 1;
    /* align-self: flex-start; ?? is that desirable ? -fd */
  }
  & > *:nth-child(2) {
    flex-grow: 1;
    flex-shrink: 1;
    /* align-self: flex-end; ?? is that desirable ? -fd */
  }
`.join('\n');

// TODO: would using flexbasis allow for auto transitionalbe layout ?
const FlexLeftCol = styled.div`
  ${flexCSSString}
  ${flexLeftColCSSString}
`;

FlexLeftCol.displayName = 'FlexLeftCol';

export default FlexLeftCol;
