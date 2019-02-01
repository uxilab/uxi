import React from 'react';
import Alert from '../Alert';
import styled, { keyframes } from 'styled-components';

const slideIn = keyframes`
  0% {
    transform: translateY(50vh);
  }

  100% {
    transform: translateY(0);
  }
`;

const growIn = keyframes`
  0% {
    max-height: 0vh;
    height: auto;
  }

  100% {
    max-height: 180px;
    height: auto;
  }
`;

const ToastWrapper = styled.div`
  max-width: 380px;
  min-width: 380px;
  margin: 8px 0;
  overflow: visible;
  animation: ${slideIn} 450ms forwards, ${growIn} 450ms forwards;
  /* height: 0px; */
  &, & > * {
    transition: ${({ theme: { transition } }) => transition.defaultAll};
  }
`;

const Toast = props => { // eslint-disable-line
  const {
    title = undefined,
    children = 'Lorem ipsum dolor sit amet, consectetur adipiscing eli.',
  } = props;

  return (
    <ToastWrapper>
      <Alert rounded showClose>
        { title && (<h5>{title}</h5>) }
        <div>{children}</div>
      </Alert>
    </ToastWrapper>
  );
};

Toast.displayName = 'Toast';

export default Toast;
