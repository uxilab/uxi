import React from 'react';
import Pin from '../Pin';

describe('Icon : <Pin />', () => {
  it('match snapshot', () => {
    expect(shallow(<Pin />)).toMatchSnapshot();
  });
});

