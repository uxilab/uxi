import React from 'react';
import Sar from '../Sar';

describe('Icon : <Sar />', () => {
  it('match snapshot', () => {
    expect(shallow(<Sar />)).toMatchSnapshot();
  });
});

