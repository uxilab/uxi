import React from 'react';
import styled, { keyframes } from 'styled-components';
import { Loading } from '../Icons';

const getAnim = () => {
  const bollox = keyframes`
    0% {
      transform: translate(-50%, -50%) rotate(0deg);
    }
    100% {
      transform: translate(-50%, -50%) rotate(360deg);
    }
  `;
  return bollox;
};

const LoaderUI = styled.div`
  display: flex;
  align-items: center;
  animation: ${() => getAnim()} 1.5s infinite linear;
  transform-origin: center;
  top: 7px;
  position: relative;
  left: 7px;
`;

const Loader = ({ color, size }) => (
  <LoaderUI color={color} >
    <Loading size={size} fill={color} />
  </LoaderUI>
);

Loader.displayName = 'Loader';

Loader.defaultProps = {
  color: '#25bcbc',
};

export default Loader;

