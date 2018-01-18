import React from 'react';
import Text from '../Text';

const P = ({ children, style }) => (
  <p style={{ padding: '15px 0', margin: 0, ...style }}>
    <Text>{children}</Text>
  </p>
);

export default P;
