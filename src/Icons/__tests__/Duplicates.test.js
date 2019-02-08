import React from 'react';
import Duplicates from '../Duplicates';

describe('Icon : <Duplicates />', () => {
  it('match snapshot', () => {
    expect(shallow(<Duplicates />)).toMatchSnapshot();
  });
});

