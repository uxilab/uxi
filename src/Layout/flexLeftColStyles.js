import { css } from 'styled-components';
import { flexStylesCSSString } from './flexLeftColStyles';

export const flexLeftColStylesCSSString = css`
  ${flexStylesCSSString};
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
`.join('');

export default null;
