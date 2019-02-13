import React from 'react';
import Minusbox from '../Minusbox';

describe('Icon : <Minusbox />', () => {
  it('match snapshot', () => {
    expect(shallow(<Minusbox />)).toMatchSnapshot();
  });
});

