import React from 'react';
import Checkboxoutline from '../Checkboxoutline';

describe('Icon : <Checkboxoutline />', () => {
  it('match snapshot', () => {
    expect(shallow(<Checkboxoutline />)).toMatchSnapshot();
  });
});


