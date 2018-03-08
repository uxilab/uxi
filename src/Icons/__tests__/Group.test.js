import React from 'react';
import Group from '../Group';

describe('Icon : <Group />', () => {
  it('match snapshot', () => {
    expect(shallow(<Group />)).toMatchSnapshot();
  });
});

