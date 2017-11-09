import React from 'react';
import Linkedin from '../Linkedin';

describe('Icon : <Linkedin />', () => {
  it('match snapshot', () => {
    expect(shallow(<Linkedin />)).toMatchSnapshot();
  });
});

