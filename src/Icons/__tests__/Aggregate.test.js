import React from 'react';
import Aggregate from '../Aggregate';

describe('Icon : <Aggregate />', () => {
  it('match snapshot', () => {
    expect(shallow(<Aggregate />)).toMatchSnapshot();
  });
});

