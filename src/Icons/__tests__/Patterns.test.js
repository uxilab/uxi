import React from 'react';
import Patterns from '../Patterns';

describe('Icon : <Patterns />', () => {
  it('match snapshot', () => {
    expect(shallow(<Patterns />)).toMatchSnapshot();
  });
});


