import React from 'react';
import Circle from '../Circle';

describe('Icon : <Circle />', () => {
  it('match snapshot', () => {
    expect(shallow(<Circle />)).toMatchSnapshot();
  });
});

