import React from 'react';
import Circledcheckmark from '../Circledcheckmark';

describe('Icon : <Circledcheckmark />', () => {
  it('match snapshot', () => {
    expect(shallow(<Circledcheckmark />)).toMatchSnapshot();
  });
});

