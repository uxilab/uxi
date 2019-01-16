import React from 'react';
import Thumbup from '../Thumbup';

describe('Icon : <Thumbup />', () => {
  it('match snapshot', () => {
    expect(shallow(<Thumbup />)).toMatchSnapshot();
  });
});

