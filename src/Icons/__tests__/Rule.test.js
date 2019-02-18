import React from 'react';
import Rule from '../Rule';

describe('Icon : <Rule />', () => {
  it('match snapshot', () => {
    expect(shallow(<Rule />)).toMatchSnapshot();
  });
});

