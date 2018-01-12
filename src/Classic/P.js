import React from 'react';
import Text from '../Text';

const P = ({ children }) => (
  <p style={{ padding: '10px 15px', margin: 0 }}>
    <Text>{children}</Text>
  </p>
);

export default P;
