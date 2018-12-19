import React from 'react';
import Followactivestate from '../Followactivestate';

describe('Icon : <Followactivestate />', () => {
  it('match snapshot', () => {
    expect(shallow(<Followactivestate />)).toMatchSnapshot();
  });
});

