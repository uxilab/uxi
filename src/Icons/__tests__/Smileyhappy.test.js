import React from 'react';
import Smileyhappy from '../Smileyhappy';

describe('Icon : <Smileyhappy />', () => {
  it('match snapshot', () => {
    expect(shallow(<Smileyhappy />)).toMatchSnapshot();
  });
});

