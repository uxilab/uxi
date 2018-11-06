import React from 'react';
import Keepintheloop from '../Keepintheloop';

describe('Icon : <Keepintheloop />', () => {
  it('match snapshot', () => {
    expect(shallow(<Keepintheloop />)).toMatchSnapshot();
  });
});

