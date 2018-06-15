import React from 'react';
import Pinterest from '../Pinterest';

describe('Icon : <Pinterest />', () => {
  it('match snapshot', () => {
    expect(shallow(<Pinterest />)).toMatchSnapshot();
  });
});

