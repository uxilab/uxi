import styled from 'styled-components';

const ErrorWrapperUI = styled.div`
  padding: 0 6px;
  font-size: 12px;
  color: ${({ theme: { palette: { semantic } } }) => semantic.error};
`;

export default ErrorWrapperUI;
