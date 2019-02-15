import styled from 'styled-components';

const TriggererWrapperWithEllispsisChildren = styled.div`
  min-height: 34px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  /* background: white; */
  /* border: 1px solid #cecece; */
  border-radius: ${({ theme: { radius } }) => radius};


  * {
    overflow-x: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    color: #222222 !important;
  }
`;


export default TriggererWrapperWithEllispsisChildren;
