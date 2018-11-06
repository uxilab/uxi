import React from 'react';
import Code from '../Code';

describe('Icon : <Code />', () => {
  it('match snapshot', () => {
    expect(shallow(<Code />)).toMatchSnapshot();
  });
});

