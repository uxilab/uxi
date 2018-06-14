import React from 'react';
import Circleduser from '../Circleduser';

describe('Icon : <Circleduser />', () => {
  it('match snapshot', () => {
    expect(shallow(<Circleduser />)).toMatchSnapshot();
  });
});


