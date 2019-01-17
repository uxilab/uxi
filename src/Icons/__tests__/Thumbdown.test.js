import React from 'react';
import Thumbdown from '../Thumbdown';

describe('Icon : <Thumbdown />', () => {
  it('match snapshot', () => {
    expect(shallow(<Thumbdown />)).toMatchSnapshot();
  });
});

