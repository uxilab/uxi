import React from 'react';
import Website2 from '../Website2';

describe('Icon : <Website2 />', () => {
  it('match snapshot', () => {
    expect(shallow(<Website2 />)).toMatchSnapshot();
  });
});

