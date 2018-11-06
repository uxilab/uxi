import React from 'react';
import Country from '../Country';

describe('Icon : <Country />', () => {
  it('match snapshot', () => {
    expect(shallow(<Country />)).toMatchSnapshot();
  });
});

