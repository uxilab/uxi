import React from 'react';
import Angellist from '../Angellist';

describe('Icon : <Angellist />', () => {
  it('match snapshot', () => {
    expect(shallow(<Angellist />)).toMatchSnapshot();
  });
});

