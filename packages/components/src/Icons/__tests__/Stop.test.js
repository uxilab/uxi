import React from 'react';
import Stop from '../Stop';

describe('Icon : <Stop />', () => {
  it('match snapshot', () => {
    expect(shallow(<Stop />)).toMatchSnapshot();
  });
});

