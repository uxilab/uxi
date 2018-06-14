import React from 'react';
import Clock from '../Clock';

describe('Icon : <Clock />', () => {
  it('match snapshot', () => {
    expect(shallow(<Clock />)).toMatchSnapshot();
  });
});


