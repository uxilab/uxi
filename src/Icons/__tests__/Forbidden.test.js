import React from 'react';
import Forbidden from '../Forbidden';

describe('Icon : <Forbidden />', () => {
  it('match snapshot', () => {
    expect(shallow(<Forbidden />)).toMatchSnapshot();
  });
});

