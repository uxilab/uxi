import React from 'react';
import Markassensitive from '../Markassensitive';

describe('Icon : <Markassensitive />', () => {
  it('match snapshot', () => {
    expect(shallow(<Markassensitive />)).toMatchSnapshot();
  });
});


