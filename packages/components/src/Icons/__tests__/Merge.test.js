import React from 'react';
import Merge from '../Merge';

describe('Icon : <Merge />', () => {
  it('match snapshot', () => {
    expect(shallow(<Merge />)).toMatchSnapshot();
  });
});

