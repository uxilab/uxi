import React from 'react';
import Hamburger from '../Hamburger';

describe('Icon : <Hamburger />', () => {
  it('match snapshot', () => {
    expect(shallow(<Hamburger />)).toMatchSnapshot();
  });
});


