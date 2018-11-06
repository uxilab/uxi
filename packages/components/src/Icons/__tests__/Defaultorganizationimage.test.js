import React from 'react';
import Defaultorganizationimage from '../Defaultorganizationimage';

describe('Icon : <Defaultorganizationimage />', () => {
  it('match snapshot', () => {
    expect(shallow(<Defaultorganizationimage />)).toMatchSnapshot();
  });
});

