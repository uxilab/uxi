import React from 'react';
import Questionmark from '../Questionmark';

describe('Icon : <Questionmark />', () => {
  it('match snapshot', () => {
    expect(shallow(<Questionmark />)).toMatchSnapshot();
  });
});

