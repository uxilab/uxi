import React from 'react';
import Wikipedia from '../Wikipedia';

describe('Icon : <Wikipedia />', () => {
  it('match snapshot', () => {
    expect(shallow(<Wikipedia />)).toMatchSnapshot();
  });
});

