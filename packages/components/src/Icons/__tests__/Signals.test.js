import React from 'react';
import Signals from '../Signals';

describe('Icon : <Signals />', () => {
  it('match snapshot', () => {
    expect(shallow(<Signals />)).toMatchSnapshot();
  });
});

