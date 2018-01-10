import styled from 'styled-components';

const H5 = styled.h5`
  ${({ theme: { sc } }) => sc.title}
  ${({ theme: { sc } }) => sc.h5}
`;

export default H5;
