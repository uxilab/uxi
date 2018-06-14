import React from 'react';
import Department from '../Department';

describe('Icon : <Department />', () => {
  it('match snapshot', () => {
    expect(shallow(<Department />)).toMatchSnapshot();
  });
});


