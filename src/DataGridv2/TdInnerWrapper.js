// @flow
import styled from 'styled-components';


const TdInnerWrapper = styled.div`
  box-sizing: border-box;
  display: flex;
  display: grid;
  flex-flow: row nowrap;
  align-items: stretch;
  align-items: center;
  width: 100%;
  padding: 0 0 0 16px;
  transition: all 0ms cubic-bezier(.5,1,.5,1);
`;

TdInnerWrapper.displayName = 'TdInnerWrapper';


export default TdInnerWrapper;
