import styled from 'styled-components';


export const ButtonIconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: content-box;
  max-width: 16px;
  max-height: 16px;
  margin: ${({ icon, textOrMessage }) =>
    (icon && textOrMessage ? '0 4px' : '0')};
`;

export default ButtonIconWrapper;
