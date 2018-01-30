import React from 'react';
import Epic from '../Epic';

describe('Icon : <Epic />', () => {
  it('match snapshot', () => {
    expect(shallow(<Epic />)).toMatchSnapshot();
  });
});

