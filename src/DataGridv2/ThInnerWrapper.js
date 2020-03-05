// @flow
import styled, { css } from 'styled-components';


const ThInnerWrapper = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: stretch;
  white-space: nowrap;
  padding: 0 0 0 16px;
  width: 100%;
  min-width: 16px;
  width: auto;
  box-sizing : border-box;
  ${({ resizable }) => (resizable ? css`padding-right: 8px` : '')};
  height: 100%;
  width: calc(100% - 8px);
`;

ThInnerWrapper.displayName = 'ThInnerWrapper';


export default ThInnerWrapper;
