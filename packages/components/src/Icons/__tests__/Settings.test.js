import React from 'react';
import Settings from '../Settings';

describe('Icon : <Settings />', () => {
  it('match snapshot', () => {
    expect(shallow(<Settings />)).toMatchSnapshot();
  });
});

