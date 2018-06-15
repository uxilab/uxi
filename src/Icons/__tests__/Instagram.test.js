import React from 'react';
import Instagram from '../Instagram';

describe('Icon : <Instagram />', () => {
  it('match snapshot', () => {
    expect(shallow(<Instagram />)).toMatchSnapshot();
  });
});

