import React from 'react';
import Visibility from '../Visibility';

describe('Icon : <Visibility />', () => {
  it('match snapshot', () => {
    expect(shallow(<Visibility />)).toMatchSnapshot();
  });
});


