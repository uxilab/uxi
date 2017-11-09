import React from 'react';
import Github from '../Github';

describe('Icon : <Github />', () => {
  it('match snapshot', () => {
    expect(shallow(<Github />)).toMatchSnapshot();
  });
});

