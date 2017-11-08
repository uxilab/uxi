import React from 'react';
import Googleplus from '../Googleplus';

describe('Icon : <Googleplus />', () => {
  it('match snapshot', () => {
    expect(shallow(<Googleplus />)).toMatchSnapshot();
  });
});


