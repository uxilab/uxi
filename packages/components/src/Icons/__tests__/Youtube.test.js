import React from 'react';
import Youtube from '../Youtube';

describe('Icon : <Youtube />', () => {
  it('match snapshot', () => {
    expect(shallow(<Youtube />)).toMatchSnapshot();
  });
});

