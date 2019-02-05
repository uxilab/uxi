import React from 'react';
import Training from '../Training';

describe('Icon : <Training />', () => {
  it('match snapshot', () => {
    expect(shallow(<Training />)).toMatchSnapshot();
  });
});

