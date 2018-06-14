import React from 'react';
import Phone from '../Phone';

describe('Icon : <Phone />', () => {
  it('match snapshot', () => {
    expect(shallow(<Phone />)).toMatchSnapshot();
  });
});


