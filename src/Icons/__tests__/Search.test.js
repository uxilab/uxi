import React from 'react';
import Search from '../Search';

describe('Icon : <Search />', () => {
  it('match snapshot', () => {
    expect(shallow(<Search />)).toMatchSnapshot();
  });
});

