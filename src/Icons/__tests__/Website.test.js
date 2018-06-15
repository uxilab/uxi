import React from 'react';
import Website from '../Website';

describe('Icon : <Website />', () => {
  it('match snapshot', () => {
    expect(shallow(<Website />)).toMatchSnapshot();
  });
});

