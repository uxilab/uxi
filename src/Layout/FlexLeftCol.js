import Flex from './Flex';

// TODO: would using flexbasis allow for auto transitionalbe layout ?
const FlexLeftCol = Flex.extend`
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
`;

FlexLeftCol.displayName = 'FlexLeftCol';

export default FlexLeftCol;
