import React from 'react';

const PreventExit = ({ message }) => {
  // eslint-disable-next-line no-return-assign
  window.addEventListener('beforeunload', e => (e.returnValue = message));
  return <div />;
};

export default PreventExit;
