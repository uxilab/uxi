
import styled from 'styled-components';


const TriggererWrapper = styled.div`
  /* min-width: 180px; */
  width: 100%;
  min-height: 34px;
  height: 34px;
  display: block;
  border-radius: ${({ theme: { radius } }) => radius};
  overflow: hidden;
  position: relative;
  /* background: white; */
`;

export default TriggererWrapper;
