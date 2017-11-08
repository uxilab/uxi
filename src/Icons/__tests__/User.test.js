import React from 'react';
import User from '../User';

describe('Icon : <User />', () => {
  it('match snapshot', () => {
    expect(shallow(<User />)).toMatchSnapshot();
  });
});


