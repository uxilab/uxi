import React from 'react';
import Robot from '../Robot';

describe('Icon : <Robot />', () => {
  it('match snapshot', () => {
    expect(shallow(<Robot />)).toMatchSnapshot();
  });
});

