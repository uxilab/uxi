import React from 'react';
import Manipulation from '../Manipulation';

describe('Icon : <Manipulation />', () => {
  it('match snapshot', () => {
    expect(shallow(<Manipulation />)).toMatchSnapshot();
  });
});

