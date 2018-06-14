import React from 'react';
import Star from '../Star';

describe('Icon : <Star />', () => {
  it('match snapshot', () => {
    expect(shallow(<Star />)).toMatchSnapshot();
  });
});


