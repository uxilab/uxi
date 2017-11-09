import React from 'react';
import Delete from '../Delete';

describe('Icon : <Delete />', () => {
  it('match snapshot', () => {
    expect(shallow(<Delete />)).toMatchSnapshot();
  });
});

