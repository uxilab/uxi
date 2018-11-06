import React from 'react';
import Codefile from '../Codefile';

describe('Icon : <Codefile />', () => {
  it('match snapshot', () => {
    expect(shallow(<Codefile />)).toMatchSnapshot();
  });
});

