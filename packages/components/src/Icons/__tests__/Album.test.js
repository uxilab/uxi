import React from 'react';
import Album from '../Album';

describe('Icon : <Album />', () => {
  it('match snapshot', () => {
    expect(shallow(<Album />)).toMatchSnapshot();
  });
});

