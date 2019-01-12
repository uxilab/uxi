
import styled from 'styled-components';


const TriggerreWrapper = styled.div`
  min-width: 180px;
  width: 100%;
  min-height: 34px;
  height: 34px;
  border: 1px solid #cecece;
  display: block;
  border-radius: ${({ theme: { radius } }) => radius};
  overflow: hidden;
  position: relative;
  /* background: white; */
`;

export default TriggerreWrapper;