import React from 'react';
import Audio from '../Audio';

describe('Icon : <Audio />', () => {
  it('match snapshot', () => {
    expect(shallow(<Audio />)).toMatchSnapshot();
  });
});


