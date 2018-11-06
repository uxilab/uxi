import React from 'react';
import Twitter from '../Twitter';

describe('Icon : <Twitter />', () => {
  it('match snapshot', () => {
    expect(shallow(<Twitter />)).toMatchSnapshot();
  });
});

