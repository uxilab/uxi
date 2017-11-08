import React from 'react';
import Server from '../Server';

describe('Icon : <Server />', () => {
  it('match snapshot', () => {
    expect(shallow(<Server />)).toMatchSnapshot();
  });
});


