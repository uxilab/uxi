import styled, { css } from 'styled-components';

export const flexCSSString = css`
  background: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: ${({ direction }) => (direction || 'row')};
`.join('\n');


// TODO: would using flexbasis allow for auto transitionalbe layout ?
export const Flex = styled.div`
  ${flexCSSString}
`;


export default Flex;
