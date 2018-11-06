import React from 'react';
import Cookie from '../Cookie';

describe('Icon : <Cookie />', () => {
  it('match snapshot', () => {
    expect(shallow(<Cookie />)).toMatchSnapshot();
  });
});

