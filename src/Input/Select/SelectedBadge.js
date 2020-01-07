import styled from 'styled-components';


const SelectedBadge = styled.div`
  background: lightblue;
  border-radius: ${({ theme }) => theme.radius};
  /* padding: 0 2px; */
  margin: 0 1px;
  display: flex;
  align-items: center;

  &&& { margin: 2px; }
  box-sizing: border-box;
  height: 30px;

  button:focus,
  button:hover {
    /* font-weight: bold; */
    transform: scale(1.25);
    filter: invert(100%);
    background-color: lightblue;
  }
`;

export default SelectedBadge;
