import React from 'react';
import Trianglearrow from '../Trianglearrow';

describe('Icon : <Trianglearrow />', () => {
  it('match snapshot', () => {
    expect(shallow(<Trianglearrow />)).toMatchSnapshot();
  });
});

