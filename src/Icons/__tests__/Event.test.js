import React from 'react';
import Event from '../Event';

describe('Icon : <Event />', () => {
  it('match snapshot', () => {
    expect(shallow(<Event />)).toMatchSnapshot();
  });
});


