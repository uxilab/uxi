import React from 'react';
import Signin from '../Signin';

describe('Icon : <Signin />', () => {
  it('match snapshot', () => {
    expect(shallow(<Signin />)).toMatchSnapshot();
  });
});

