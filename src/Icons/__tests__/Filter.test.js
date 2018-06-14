import React from 'react';
import Filter from '../Filter';

describe('Icon : <Filter />', () => {
  it('match snapshot', () => {
    expect(shallow(<Filter />)).toMatchSnapshot();
  });
});


