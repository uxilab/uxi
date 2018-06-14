import React from 'react';
import Idbadge from '../Idbadge';

describe('Icon : <Idbadge />', () => {
  it('match snapshot', () => {
    expect(shallow(<Idbadge />)).toMatchSnapshot();
  });
});


