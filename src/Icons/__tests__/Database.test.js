import React from 'react';
import Database from '../Database';

describe('Icon : <Database />', () => {
  it('match snapshot', () => {
    expect(shallow(<Database />)).toMatchSnapshot();
  });
});

