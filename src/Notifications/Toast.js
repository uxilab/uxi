import React from 'react';
import Alert from '../Alert';
import styled, { keyframes } from 'styled-components';

const slideIn = keyframes`
  0% {
    transform: translateY(30vh);
  }

  100% {
    transform: translateY(0);
  }
`;

const growIn = keyframes`
  0% {
    max-height: 0px;
  }

  100% {
    max-height: 180px;
  }
`;

const ToastWrapper = styled.div`
  height: auto;
  max-width: 380px;
  min-width: 380px;
  margin: 8px 0;
  overflow: visible;
  animation:
    ${slideIn} 450ms cubic-bezier(0.23, 1, 0.32, 1) forwards,
    ${growIn}  450ms cubic-bezier(0.23, 1, 0.32, 1) forwards
  ;
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
