import React from 'react';
import Person from '../Person';

describe('Icon : <Person />', () => {
  it('match snapshot', () => {
    expect(shallow(<Person />)).toMatchSnapshot();
  });
});

