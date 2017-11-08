import React from 'react';
import Markasunsensitive from '../Markasunsensitive';

describe('Icon : <Markasunsensitive />', () => {
  it('match snapshot', () => {
    expect(shallow(<Markasunsensitive />)).toMatchSnapshot();
  });
});


