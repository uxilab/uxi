import React from 'react';
import Archive from '../Archive';

describe('Icon : <Archive />', () => {
  it('match snapshot', () => {
    expect(shallow(<Archive />)).toMatchSnapshot();
  });
});

