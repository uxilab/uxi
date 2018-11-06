import React from 'react';
import Checkmark from '../Checkmark';

describe('Icon : <Checkmark />', () => {
  it('match snapshot', () => {
    expect(shallow(<Checkmark />)).toMatchSnapshot();
  });
});

