import React from 'react';
import UserMessageProvider from '../UserMessageProvider';

export default Comp => props => (
  <UserMessageProvider>
    <Comp {...props} />
  </UserMessageProvider>
);
