import React from 'react';
import Changes from '../Changes';

describe('Icon : <Changes />', () => {
  it('match snapshot', () => {
    expect(shallow(<Changes />)).toMatchSnapshot();
  });
});

