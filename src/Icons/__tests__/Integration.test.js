import React from 'react';
import Integration from '../Integration';

describe('Icon : <Integration />', () => {
  it('match snapshot', () => {
    expect(shallow(<Integration />)).toMatchSnapshot();
  });
});


