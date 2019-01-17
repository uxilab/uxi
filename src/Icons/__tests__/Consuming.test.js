import React from 'react';
import Consuming from '../Consuming';

describe('Icon : <Consuming />', () => {
  it('match snapshot', () => {
    expect(shallow(<Consuming />)).toMatchSnapshot();
  });
});

