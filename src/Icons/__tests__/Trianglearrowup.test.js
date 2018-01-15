import React from 'react';
import Trianglearrowup from '../Trianglearrowup';

describe('Icon : <Trianglearrowup />', () => {
  it('match snapshot', () => {
    expect(shallow(<Trianglearrowup />)).toMatchSnapshot();
  });
});


