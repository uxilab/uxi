import React from 'react';
import At from '../At';

describe('Icon : <At />', () => {
  it('match snapshot', () => {
    expect(shallow(<At />)).toMatchSnapshot();
  });
});


