import React from 'react';
import Position from '../Position';

describe('Icon : <Position />', () => {
  it('match snapshot', () => {
    expect(shallow(<Position />)).toMatchSnapshot();
  });
});


