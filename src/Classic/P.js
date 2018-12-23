import React from 'react';
// import Text from '../Text';

const P = ({ children, style }) => (
  <p style={{ padding: '16px 0', margin: 0, ...style }}>
    {children}
  </p>
);

export default P;
