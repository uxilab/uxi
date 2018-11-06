import Flex from './Flex'; // eslint-disable-line import/no-named-as-default

// TODO: would using flexbasis allow for auto transitionalbe layout ?
const FlexRightCol = Flex.extend`
  & > *:nth-child(1) {
    flex-grow: 1;
    flex-shrink: 1;
    /* align-self: flex-start; ?? is that desirable ? -fd */
  }
  & > *:nth-child(2) {
    flex-grow: 0;
    flex-shrink: 1;
    /* align-self: flex-end; ?? is that desirable ? -fd */
  }
`;

FlexRightCol.displayName = 'FlexRightCol';

export default FlexRightCol;
